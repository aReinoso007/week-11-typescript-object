import { StatusProp } from "../models/status.model";

const Status: React.FC<StatusProp> = (props) => {

    let message
    if(props.status === 'loading'){
        message = 'Loading...';
    }else if(props.status === 'error'){
        message = 'Error fetching data';
    }else if(props.status === 'success'){
        message = 'Data fetched successfully';
    }

    return (
        <div>
        <h1>Status</h1>
        <p>{message}</p>
        </div>
    );
}

export default Status;