/** 가입화면에서 사용하는 포커스받으면 색칠되는 `<hr/>`같은 친구 */
function InputUnderline({ children }: React.PropsWithChildren) {
  return (
    <div className="group relative">
      {children}
      <div className="group-focus-within:border-primary border-b border-gray-300" />
    </div>
  );
}

export default InputUnderline;
