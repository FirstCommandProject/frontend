import React from 'react';
import {
    VictoryBar, VictoryChart, VictoryLabel,
    VictoryTheme, VictoryPolarAxis, VictoryStack
} from 'victory';
import _ from 'lodash';


const directions = {
    0: "Математическое моделирование", 
    30: "Прикладная математика", 
    60: "Высокопроизводительные системы", 
    90: "Умные системы",
    120: "Автоматизированные системы",
    150: "Информационные системы", 
    180: "Бизнес-процессы", 
    210: "IT-managment", 
    240: "Машинное обучение", 
    270: "Эргодизайн", 
    300: "Разработка ПО", 
    330: "Киберфизические системы"
};

const mainColor = {base: "#0090ff", highlight: "#215BFD"};

const centerColor = {base: "#0090ff", highlight: "white"};

const innerRadius = 7;

function CompassCenter({ origin }) {
    const circleStyle = {
        stroke: centerColor.base, strokeWidth: 2, fill: centerColor.highlight
    };

    return (
        <g>
            <circle
                cx={origin.x} cy={origin.y} r={innerRadius} style={circleStyle}
            />
        </g>
    );
}

function CenterLabel(props) {
    const {datum, active, color} = props;
    const text = [`${directions[datum._x] || ' '}`];
    const baseStyle = { fill: color.highlight };
    const style = [
        {...baseStyle, fontSize: 4},
        {...baseStyle, fontSize: 4}
    ];

    return active ?
        (
            <VictoryLabel
                text={text} style={style} x={props.width / 2 -5} y={props.height / 2 -1} renderInPortal
            />
        ) : null;
}


const DiagramRes = ({ scores }) => {
    const data = scores.map((value, index) => ({
        x: index * 30,
        y: value.score
    }));

    return (
        <VictoryChart
            height={200}
            width={400}
            polar
            theme={VictoryTheme.material}
            innerRadius={innerRadius}
            domainPadding={{y: 5}}
            // events={[{
            //     childName: "all",
            //     target: "data",
            //     eventHandlers: {
            //         onMouseOver: () => {
            //             return [
            //                 {target: "labels", mutation: () => ({active: true})}
            //             ];
            //         },
            //         onMouseOut: () => {
            //             return [
            //                 {target: "labels", mutation: () => ({active: false})}
            //             ];
            //         }
            //     }
            // }]}
        >
            {/* внутренние круговые */}
            <VictoryPolarAxis
                dependentAxis
                labelPlacement="vertical"
                style={{axis: {stroke: "none"}}}
                tickFormat={() => ""}
            />
            {/* подписи справа */}
            <VictoryPolarAxis
                labelPlacement="parallel"
                tickValues={_.keys(directions).map((k) => +k)}
                tickFormat={_.values(directions)}
                style={{
                    tickLabels: {fontSize: 4, padding: 8},
                    axis: {stroke: "#2A8FF0"}
                  }}
            />
            {data.length &&
                <VictoryStack>
                    <VictoryBar
                        style={{
                            data: {
                                fill: ({active}) => active ? mainColor.highlight : mainColor.base,
                                width: 10
                            }
                        }}
                        data={data}
                        x="x"
                        y="y"
                        labelComponent={<CenterLabel color={mainColor}/>}
                    />
                </VictoryStack>
            }
            <CompassCenter />
        </VictoryChart>
    );
}


export default DiagramRes;
