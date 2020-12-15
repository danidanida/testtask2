import React, { useState } from 'react';


function NodeComponent(props) {
    const [state, setState] = useState(true);

    function onToggle() {

        if (state == true) {
            setState(false)
        } else setState(true)
    }

    const dataModel = props.dataModel;
    if (state == true) {
        return <div className="element">
            <div>
                <li><p className="nodeName" onClick={onToggle}>  <span class="iconify" data-icon="ant-design:up-outlined" data-inline="false" data-width="20px" data-height="20px"></span> <span className="iconify" data-icon="ph:cube-light" data-inline="false" data-width="16px" data-height="16px"></span> {dataModel.name}</p></li>
                <div className="nodeChildren">  {dataModel.children.map((child) =>
                    <NodeComponent dataModel={child} />)}
                </div>
            </div>
        </div>
    }
    else {
        return <div className="element">
            <li><p className="nodeName" onClick={onToggle}> <span class="iconify" data-icon="ant-design:down-outlined" data-inline="false" data-width="20px" data-height="20px"></span>  <span className="iconify" data-icon="ph:cube-light" data-inline="false" data-width="16px" data-height="16px"></span> {dataModel.name}</p></li>
        </div>
    }
}

export default NodeComponent;