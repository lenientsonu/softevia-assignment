import NewTask from "../NewTask/NewTask";
import Tasks from "../Tasks/Tasks";

import './HomePage.scss'

const HomePage = () => {
    return (
        <div className="home">
            <h1 className='text-5xl font-bold'>Tasks</h1>
            <NewTask />
            <Tasks />
        </div>
    );
};

export default HomePage;
