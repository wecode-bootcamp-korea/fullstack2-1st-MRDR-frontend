import styled from '@emotion/styled';

type SubmitProps = {
  title: string;
  disabled: boolean;
  isActive: boolean;
  onClick: () => void;
};

function Submit(props: SubmitProps) {
  const SubmitButton = styled.button<{ isActive: boolean }>`
    width: 100%;
    padding: 16px 0;
    background-color: ${props => (props.isActive ? '#FD6B36' : '#e7e6e5')};
    color: #fff;
    border-radius: 14px;
  `;

  return (
    <SubmitButton onClick={props.onClick} disabled={props.disabled} isActive={props.isActive}>
      {props.title}
    </SubmitButton>
  );
}

export default Submit;
