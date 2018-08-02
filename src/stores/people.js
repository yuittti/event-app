import EntitiesStore, { loadAllHelper, subscribeHelper } from './EntitiesStore';
import { computed, action } from 'mobx';
import groupBy from 'lodash/groupBy';
import firebase from 'firebase';

class PeopleStore extends EntitiesStore {
    @computed get sections() {
        const grouped = groupBy(this.list, person => person.firstName.charAt(0));

        return Object.entries(grouped).map(([letter, list]) => ({
            title: `${letter}, ${list.length} people`,
            data: list.map(person => ({key: person.uid, person}))
        }));
    }

    @action updatePerson(uid, data) {
        firebase.database().ref(`people/${uid}`).update(data);
    }

    @action loadAll = loadAllHelper('people');
}
 
export default PeopleStore;