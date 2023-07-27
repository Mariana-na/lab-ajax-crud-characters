class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = axios.create ({
      baseURL: "http://localhost:3000/characters" 
    });
  }

  async getFullList () {

      const response = await axios.get ('http://localhost:3000/characters');

      if (response.status === 200) {
        console.log("full list")
      } else {
        console.log("wrong")
      }

      return response

  }

  getOneRegister (id) {
    axios
    .get("http://localhost:3000/characters/:id")
    .then ((response) => response.json())
    .then ((data) => {
      console.log(data)
    })
    .catch ((error) => console.log(error));
  }

  createOneRegister (characterInfo) {
    return this.BASE_URL.post('', characterInfo)

  }

  updateOneRegister (characterId, characterInfo) {
    return this.BASE_URL.put('/:id', characterInfo)

  }

  async deleteOneRegister (characterId) {
    const response = await axios.delete ('http://localhost:3000/characters/:id');
    if (response.status === 200) {
      console.log("Successfuly deleted")
    } else {
      console.log("id doesn't exist")
    }
    return response.data

  }
}
