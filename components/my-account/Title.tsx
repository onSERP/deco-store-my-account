export interface Props {
    content: string;
    size?: 'small' | 'medium' | 'large';
}

function Title({content, size = "large"}: Props) {

    let sizeClass = '';

    switch (size) {
        case 'small':
            sizeClass = 'text-base lg:text-2xl';
            break;
        case 'medium':
            sizeClass = 'text-xl lg:text-3xl';
            break;
        case 'large':
            sizeClass = 'text-2xl lg:text-4xl';
            break;
        default:
            sizeClass = 'text-2xl lg:text-4xl';
            break;
    }

  return <div class={`uppercase font-bold py-8 ${sizeClass}`}>
    {content}
  </div>;
}

export default Title;