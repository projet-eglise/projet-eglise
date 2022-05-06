const resource = '/authentication'

export default ($axios) => ({
  async login(email, password) {
    return await $axios.post('/login', {
      email: email,
      password: password,
    })
  },
  async signin(payload) {
    let data = new FormData()
    data.append('firstname', payload.firstname)
    data.append('lastname', payload.lastname)
    data.append('email', payload.email)
    data.append('password', payload.password)
    data.append('birthdate', payload.birthdate)
    data.append('phone_number', payload.phone_number)
    if(payload.profile_image !== null) {
      data.append('profile_image', payload.profile_image)
    }

    return await $axios.post('/signin', data)
  },
  async whoami() {
    return await $axios.get('/whoami')
  },
})
