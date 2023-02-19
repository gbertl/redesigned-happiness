interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '', ...props }: Props) => {
  return (
    <div className={`max-w-[1300px] mx-auto w-[85%] ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
