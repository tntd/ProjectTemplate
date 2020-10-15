export const generateChartData = (data = {}, type, option = {}) => {
    const { title, x = [], y = []} = data;
    const yAxis = y.map(item => ({
        type: 'value'
    }));
    const defaultOption = {
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
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
                    name: item.name,
                    // xAxisIndex: 1,
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
            break;
        case 'pie':
            return option;
    }

    return {
        ...defaultOption,
        ...option
    };
};

export const setYAxisInterval = (option = {}, splitNumber = 5) => {
    const { series = [], yAxis = [] } = option;
    const calulateInterval = (series = []) => {
        let values = series.reduce((acc, cur) => {
            acc = [
                ...acc,
                ...(cur.data || []).map(val => +val)
            ];
            return acc;
        }, []);

        values = [
            ...values,
            ...series.filter(serie => serie.stack).reduce((acc, cur) => {
                acc = (cur.data || []).map(
                    (val, index) => +val + (acc[index] || 0)
                );
                return acc;
            }, [])
        ];
       
        const max = Math.ceil(Math.max(...values));
        const min = Math.floor(Math.min(...values));

        return {
            min, max, interval: (max - min) / splitNumber
        };
    };

    option.yAxis = yAxis.map((item, yAxisIndex) => ({
        ...item,
        splitNumber,
        ...calulateInterval(
            (series || []).filter(
                serie => serie.yAxisIndex === yAxisIndex
            ),
            splitNumber
        )
    }));

    return option;
};
