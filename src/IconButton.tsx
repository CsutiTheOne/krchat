import './IconButton.css'

export type IconButtonProps = {
    iconName?: String;
    buttonContent?: string;
    onClick?: () => void;
}

export function IconButton( {iconName, buttonContent, onClick}: IconButtonProps ) {

    return <button type='button' class="IconButton" onClick={ onClick }>
        <span class="material-symbols-outlined">{ iconName }</span>
        { buttonContent }
    </button>
}