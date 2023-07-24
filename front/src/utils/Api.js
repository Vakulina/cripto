class Api {
  constructor() {
  this._url = `http://vakulina.space/api/percentages`
  }
  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(res.message))  //"Ошибка. Что-то пошло не так..."
    }
  }
  getPercentages() {

     return fetch(this._url, {
       method: "GET",
     })
     .then(this._checkRequest);
   }
  specifyParsePercentages() {
    return fetch(this._url, {
      method: 'POST',
    })
    .then(this._checkRequest);
  };
}

const api = new Api();
export { api };
