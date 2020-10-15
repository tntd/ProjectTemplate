import { createRef, useEffect } from 'react';
import echarts from 'echarts';
import styled from 'styled-components';
import theme from './theme';
import { generateChartData } from './utils';

echarts.registerTheme('macarons', theme);

const Chart = styled.div`
    height: 400px;
    width: 100%;
`;

export default ({ data, type = 'line', option = {}, onNodeClick, ...props }) => {
    const ref = createRef(null);

    useEffect(() => {
        const chart = echarts.init(ref.current, 'macarons');
        const formatOption = props.formatOption || (option => option);   
        chart.showLoading();
        
        if (data) {
            chart.clear();
            chart.setOption(
                formatOption(generateChartData(data, type, option))
            );
            chart.hideLoading();
            chart.on('click', { dataType: 'node' }, params => {
                onNodeClick && onNodeClick(params);
            });
        }

        return () => chart.dispose();
    }, [data]);

    return (
        <Chart {...props} ref={ref} />
    );
};
