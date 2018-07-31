import Events from './events';
import User from './user';

const stores = {
    user: new User(),
    events: new Events()
}

export default stores;