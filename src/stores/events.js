import { observable, computed } from 'mobx';
import data from '../fixtures';
import { entitiesFromFB } from './utils';
import firebase from 'firebase';

class Events {
    @observable loading = false
    @observable loaded = false
    @observable entities = {}

    @computed get list() {
        return Object.values(this.entities)
    }

    @computed get length() {
        return Object.keys(this.entities).length
    }

    loadAll() {
        this.loading = true;

        firebase.database().ref('events')
            .on('value', data => {
                this.entities = entitiesFromFB(data.val())
                this.loading = false
            });
    }
}

export default Events;