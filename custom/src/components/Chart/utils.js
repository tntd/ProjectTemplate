import { get } from 'lodash';

export const generateChartData = (data = {}, type, option = {}) => {
    const { title, x = [], y = []} = data;
    const yAxis = y.map(item => ({
        type: 'value',
        axisLabel: {
            formatter: `{value}${get(item, '0.dataFormat', '')}`
        }
    }));
    const defaultOption = {
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: type === 'bar' ? 'shadow' : 'line'       // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: x || []
        },
        yAxis: yAxis.length > 1 ? yAxis : yAxis[0],
        series: y.reduce((series, cur = [], curIndex) => {
            cur.forEach(item => {
                series.push({
                    type: item.type || type || 'line',
                    barWidth: '50%',
                    name: item.name,
                    yAxisIndex: curIndex,
                    data: item.datas
                });
            });
            return series;
        }, [])
    };

    switch (type) {
        case 'line':
        case 'bar':
            defaultOption.legend = {
                data: (defaultOption.series || []).map(({ name }) => name)
            };
            break;
        case 'pie':
        case 'graph':
            return option;
    }

    return {
        ...defaultOption,
        ...option
    };
};