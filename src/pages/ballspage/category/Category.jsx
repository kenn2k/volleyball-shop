import styles from "./category.module.css";

function Category({ onCategoryChange }) {
  const categories = ["All", "Molten", "Wilson", "Tachikara", "Mikasa"];

  return (
    <div className={styles.sideBar}>
      <h2>Category</h2>
      <div className={styles.container}>
        {categories.map((category) => (
          <label key={category} htmlFor={category}>
            <input
              type="radio"
              name="category"
              id={category}
              onChange={() => onCategoryChange(category)}
            />

            {category}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Category;
