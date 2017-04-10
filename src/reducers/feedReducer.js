const initialState = {
  status: 'empty',
  posts: [],
  featuredWork: [],
  featuredBlog: [],
  content: {}
};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'GET_FEED_PENDING':{
            state = {...state, status: 'Pending'};
            break;
        }
        case 'GET_FEED_FULFILLED':{
            state = {...state, posts: buildWordpressObj(action.payload.data.posts), status: 'Fulfilled'};
            break;
        }
        case 'GET_HOME_REJECTED':{
            state = {...state, status: 'Error'};
            break;
        }
        case 'GET_HOME_PENDING':{
            state = {...state, status: 'Pending'};
            break;
        }
        case 'GET_HOME_FULFILLED':{
            //Use url stored in config (set in feedAction) as key for batch object
            state = {...state,
               featuredWork: action.payload.data[JSON.parse(action.payload.config.data).featuredWork.url].posts,
               featuredBlog: action.payload.data[JSON.parse(action.payload.config.data).featuredBlog.url].posts,
               content: buildWPContentObj(action.payload.data[JSON.parse(action.payload.config.data).content.url].posts),
              status: 'Fulfilled'
            };
            // console.log(fObj.content);
            break;
        }
        case 'GET_FEATURED_REJECTED':{
            state = {...state, status: 'Error'};
            break;
        }
        default:
    }
    return state;
}

function buildWordpressObj(wp) {
  let pArray = [];
  for (var i=0; i < wp.length; i++) {
    let pObj = {
      id: wp[i].ID,
      title: wp[i].title,
      tag: convertTags(wp[i].tags),
      img: wp[i].featured_image,
      date: wp[i].date,
    }
    pArray.push(pObj);
  }
  return pArray;
}

function buildWPContentObj(wp) {
  let cObj = {};
  for (var c=0; c < wp.length; c++){
    wp[c].content = wp[c].content.replace(/(<([^>]+)>)/ig,"");;
    cObj[wp[c].slug] = wp[c];
  }

  console.log('BWC', cObj);
  return cObj;
}

function convertTags (obj) {
    var keys = Object.keys(obj);
    var kString = '';
    for (var i=0; i < keys.length; i++) {
      if (i > 0){
        kString = kString + ' #' + keys[i];
      }else {
        kString = kString + '#' + keys[i];
      }
    }
    return kString;
};
