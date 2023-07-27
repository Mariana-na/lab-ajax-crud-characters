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

  async getOneRegister (characterId) {
    const response = await axios.get (`http://localhost:3000/characters/${characterId}`);

    if (response.status === 200) {
      console.log("working")
    } else {
      console.log("wrong")
    }
    
    return response.data
  }

  createOneRegister (characterInfo) {
    return this.BASE_URL.post('', characterInfo)

  }

  updateOneRegister (characterId, characterInfo) {
    return this.BASE_URL.put('/:id', characterInfo)

  }

  async deleteOneRegister (characterId) {
    const response = await axios.delete (`http://localhost:3000/characters/${characterId}`);
    if (response.status === 200) {
      console.log("Successfuly deleted")
    } else {
      console.log("id doesn't exist")
    }
    return response.data

  }
}
