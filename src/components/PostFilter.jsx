import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter, setVisible}) => {
    
  return (
    <div >
      <MyInput
        onChange={e => setFilter({...filter, query: e.target.value})}
        value={filter.query}
        placeholder="Search"/>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
            <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort}) }
          defaultValue="Sort By"
          options={[
            { value: 'title', name: 'By title' },
            { value: 'body', name: 'By content' }
          ]} />
        <MyButton onClick={() => setVisible(true)}>Create new post</MyButton>
        </div>
        

    </div>
  );
};

export default PostFilter;
