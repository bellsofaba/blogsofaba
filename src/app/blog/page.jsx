import Menu from '@/components/Menu/Menu';
import CardList from '@/components/cardList/CardList';
import styles from "./blogPage.module.css";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { data } = searchParams;


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Data Blog</h1>
      <div className={styles.content}>
        <CardList page={page} data={data} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;