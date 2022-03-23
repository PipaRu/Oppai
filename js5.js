function pick(object, keys) {
    var newuser = {};
    for (const k in object) {
        for (var i = 0; i < keys.length; i++) {
            if (k == keys[i]) newuser[k] = object[k];
        }
    }
    console.log(newuser);
    }
    var user = {
        name: 'Dmitry',
        age: 20,
        email: 'dm@gmail.com',
        friends: ['Ivan', 'Sasha']
}
pick(user, ['name', 'friends']);

