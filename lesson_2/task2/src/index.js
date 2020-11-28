import { printProfile } from './profile';

const userData = {
    name: 'Tom',
    age: 15
};

const profile = {
    ...userData,
    company: 'Gromcode',
};

printProfile(profile);