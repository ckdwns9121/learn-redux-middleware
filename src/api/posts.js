// 1. 가짜 포스트 목록 데이터 만들기
import axios from 'axios';
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 임의로 구현한 API
const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어를 배워봅시다',
    body: '리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠.'
  },
  {
    id: 2,
    title: 'redux-thunk를 사용해봅시다',
    body: 'redux-thunk를 사용해서 비동기 작업을 처리해봅시다!'
  },
  {
    id: 3,
    title: 'redux-saga도 사용해봅시다',
    body:
      '나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거예요.'
  }
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  const url = 'http://localhost:4000/posts';
  const result = await callPost(url);
  return result;
  // const response = await axios.get('http://localhost:4000/posts');
  // return response.data;
 // await sleep(500); // 0.5초 쉬고
  //return posts; // posts 배열
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
  const url = `http://localhost:4000/posts/${id}`;
  const result = await callPost(url);
  return result;
//  const response = await axios.get(`http://localhost:4000/posts/${id}`);
 // return response.data;
  //await sleep(500); // 0.5초 쉬고
  //return posts.find(post => post.id === id); // id 로 찾아서 반환
};

const callPost =(url)=>{
  return fetch(url)
  .then(response => response.json())
   .catch(err=>console.log(err))
}