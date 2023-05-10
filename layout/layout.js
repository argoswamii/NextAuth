import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center py-10">{children}</div>
    </div>
  );
}
