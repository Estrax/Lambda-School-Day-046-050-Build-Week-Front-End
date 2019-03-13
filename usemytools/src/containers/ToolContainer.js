import React from 'react';
import Tool from '../components/Tool';

const ToolContainer = (props) => {
    return (
        <>
            <Tool
                key={props.tool.id}
                id={props.tool.id}
                name={props.tool.name}
                photo_url={props.tool.photo_url}
                price={props.tool.price}
                lender_id={props.tool.lender_id}
                editTool={props.editTool}
                deleteTool={props.deleteTool}
                borrowTool={props.borrowTool}
                deleteToolBorrowing={props.deleteToolBorrowing}
                is_borrowed={props.tool.is_borrowed}
                userID={props.userID}
                singleTool={true}
            />
        </>
    );
}

export default ToolContainer;