
import { useEffect, useReducer, useRef, useState } from "react";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modalVisible, setVisible] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    const createPost = async (newPost) => {
        setPosts([...posts, newPost])
        setVisible(false)
        //await CreateService.createPost(newPost)
        //fetchPosts()
    }

    const changePage = (page) => {
        setPage(page)
    }

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        //await DeleteService.deleteById(post.id)
        //fetchPosts()
    }

    return (
        <div className="App">
            <MyModal visible={modalVisible} setVisible={setVisible}>
                <PostForm create={createPost} />
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter} setVisible={setVisible} />
            <MySelect 
            value={limit}
             onChange={value => setLimit(value)}
             defaultValue='Elements number'
             options={[{value: 5, name: '5'}, {value: 10, name: '10'}, {value: 25, name: '25'}, {value: -1, name: 'All posts'}]}
             />
            <hr style={{ backgroundColor: 'orange', padding: '0.3px', margin: '10px' }} />
            {
                postError &&
                <h1>Error: ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts" />
            <div ref={lastElement} style={{ height: 20, background: 'red' }} />
            {isPostsLoading &&
                <div style={{ display: "flex", justifyContent: "center", marginTop: 150 }}>
                    <Loader />
                </div>}
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
}

export default Posts;