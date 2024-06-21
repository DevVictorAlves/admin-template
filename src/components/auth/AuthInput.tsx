interface AuthInputProps {
  label: string;
  value: any;
  size?: number;
  required: boolean;
  rendered?: boolean;
  type?: "text" | "email" | "password";
  onChange?: (newValue: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.rendered ?? true ? (
    <div className="flex flex-col mt-4">
      <label>{props.label}</label>
      <input
        className={`
          px-4 py-3 rounded-lg bg-gray-200 mt-2
          border focus:border-blue-500 focus:bg-white
          focus:outline-none
          `}
        type={props.type ?? "text"}
        maxLength={props.size ?? 200}
        value={props.value}
        required={props.required}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </div>
  ) : null;
}
