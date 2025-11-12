import { IconButton } from "./IconButton";
import { TextInput, TextInputProps } from "./TextInput";
import "./TextInputAndButton.css";

export type TextInputAndButtonProps = TextInputProps & {
    buttonContent?: string;
    iconName?: string;
    onClick?: () => void;
}
export function TextInputAndButton( 
    { buttonContent, iconName, onClick, ...textInputProps }: TextInputAndButtonProps 
) {
    return <div class="TextInputAndButton">
        <TextInput { ...textInputProps } onEnter={ onClick } />
        <IconButton iconName={iconName} buttonContent={ buttonContent } onClick={ onClick } />
    </div>
}