import styles from "./TextLabel.module.scss";
const TextLabel = ({ text }: { text: string }) => {
  return <div className={styles.textLabel}>{text}</div>;
};
export default TextLabel;
