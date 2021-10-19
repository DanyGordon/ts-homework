interface Post {
  userId: number
  id: number
  title: string
  body: string
};

const url = 'https://jsonplaceholder.typicode.com/posts';

async function renderPosts() {
  const posts = await get<Post[]>(url);
  posts.forEach(post => appendPost(post));
}

async function get<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json() as Promise<T>;
}

function appendPost(post: Post): void {
  const postContainer = document.querySelector('.post-container');
  const postNode = createPostNode(post);
  postContainer.append(postNode);
}

function createPostNode(post: Post): Node {
  const node = document.createElement('div');
  const header = document.createElement('header');
  const title = document.createElement('h2');
  title.innerHTML = post.title;
  const subTitle = document.createElement('span');
  subTitle.innerHTML = `Post ${post.id} created by user ${post.userId}`
  const body = document.createElement('p');
  body.innerHTML = post.body;
  header.append(title);
  header.append(subTitle);
  node.append(header);
  node.append(body);
  return node;
}

renderPosts();