import classes from './styles.module.css'

type Review = {
    author: {
        name: string
        lastname: string
        email: string
    }
    comment: string
    skinScale: 'dark' | 'light' | 'intermediate'
    ageRange: 'young' | 'adult' | 'old'
}

type Product = {
    id: string
    name: string
    price: {
        original: number
        offer: number
    }
}

type Props = {
    product: Product
    onSubmitReview: (review: Review) => void | Promise<void>
}

const ProductReviewForm: React.FC<Props> = ({ product }) => {
  const { name } = product
  return <div className={classes.wrapper}>

  </div>;
};

export default ProductReviewForm;
