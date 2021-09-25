import React, { useEffect } from 'react';
import {
    VictoryBar, VictoryChart, VictoryLabel,
    VictoryTheme, VictoryPolarAxis, VictoryStack
} from 'victory';
import _ from 'lodash';


const directions = {
    // 0: "Математическое моделирование в инженерных науках", 
    // 30: "Прикладная математика для высокопроизводительных вычеслительных систем", 
    // 60: "Высокопроизводительные вычислительные системы и квантовая обработка информация", 
    // 90: "Интеллектуальные системы",
    // 120: "Информационное и программное обеспечение автоматизированных систем", 
    // 150: "Разработка информационных систем и Web-приложений", 
    // 180: "Системная интеграция и управление бизнес-процессами", 
    // 210: "IT-managment", 
    // 240: "Машинное обучение и технологии больших данных", 
    // 270: "Эргодизайн пользовательского интерфейса", 
    // 300: "Методы и средства разработки программного обеспечения", 
    // 330: "Управление киберфизическимим системами"
    0: "01.04.02", 
    30: "01.04.02", 
    60: "09.04.01", 
    90: "09.04.01",
    120: "09.04.01", 
    150: "09.04.01", 
    180: "09.04.01", 
    210: "09.04.01", 
    240: "09.04.03", 
    270: "09.04.03", 
    300: "09.04.04", 
    330: "09.04.03"
};

const orange = {base: "#0080ff", highlight: "#3877CD"};

const red = {base: "#DBEDFE", highlight: "green"};

const innerRadius = 15;

function CompassCenter({ origin }) {
    const circleStyle = {
        stroke: red.base, strokeWidth: 2, fill: orange.base
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
        {...baseStyle, fontSize: 10, fontWeight: "bold"},
        {...baseStyle, fontSize: 8}
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
            height={300}
            width={500}
            polar
            animate={{duration: 500, onLoad: {duration: 500}}}
            theme={VictoryTheme.material}
            innerRadius={innerRadius}
            domainPadding={{y: 10}}
            events={[{
                childName: "all",
                target: "data",
                eventHandlers: {
                    onMouseOver: () => {
                        return [
                            {target: "labels", mutation: () => ({active: true})}
                        ];
                    },
                    onMouseOut: () => {
                        return [
                            {target: "labels", mutation: () => ({active: false})}
                        ];
                    }
                }
            }]}
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
            />
            {data.length &&
                <VictoryStack>
                    <VictoryBar
                        style={{
                            data: {
                                fill: ({active}) => active ? orange.highlight : orange.base,
                                width: 20
                            }
                        }}
                        data={data}
                        x="x"
                        y="y"
                        label='adsd'
                        labelComponent={<CenterLabel color={orange}/>}
                    />
                </VictoryStack>
            }
            <CompassCenter />
        </VictoryChart>
    );
}


export default DiagramRes;
