export default {
    name: state => state.user ? state.user.hoSo.hoTen : '',
    age: state => state.user ? state.user.hoSo.age : '',
    account: state => state.account,
    password: state => state.password,
};
