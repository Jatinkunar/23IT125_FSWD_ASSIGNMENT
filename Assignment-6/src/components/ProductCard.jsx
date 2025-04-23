import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ name, price, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
