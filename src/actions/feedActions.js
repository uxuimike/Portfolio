import axios from "axios";

export function getFeed(query) {
  return {
    type: 'GET_FEED',
    payload: axios.get('https://public-api.wordpress.com/rest/v1.1/sites/uxuimike.wordpress.com/posts/?' + query)
    //payload: axios.get('https://public-api.wordpress.com/rest/v1.1/batch/?urls[0]=/sites/uxuimike.wordpress.com/posts/?category=work&urls[1]=/sites/uxuimike.wordpress.com/posts/? + query')
  }
}

export function getHome() {

  var config = {
    data: {
      featuredWork : {
        url: '/sites/uxuimike.wordpress.com/posts/?category=featured-work'
      },
      featuredBlog : {
        url: '/sites/uxuimike.wordpress.com/posts/?category=featured-blog'
      },
      content: {
        url: '/sites/uxuimike.wordpress.com/posts/?category=content'
      }
    }
  };
  return {
    type: 'GET_HOME',
    //payload: axios.get('https://public-api.wordpress.com/rest/v1.1/sites/uxuimike.wordpress.com/posts/?category=featured')
    payload: axios.get('https://public-api.wordpress.com/rest/v1.1/batch/?urls[0]=' +
    config.data.featuredWork.url +
    '&urls[1]=' + config.data.featuredBlog.url +
    '&urls[2]=' + config.data.content.url
    , config)
  }
}

export function getPage(query) {
  return {
    type: 'GET_PAGE',
    payload: axios.get('https://public-api.wordpress.com/rest/v1.1/sites/uxuimike.wordpress.com/posts/' + query)
    //payload: axios.get('https://public-api.wordpress.com/rest/v1.1/batch/?urls[0]=/sites/uxuimike.wordpress.com/posts/?category=work&urls[1]=/sites/uxuimike.wordpress.com/posts/? + query')
  }
}
