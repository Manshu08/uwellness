import React, { useMemo } from 'react';
import styled from 'styled-components';
import THEME from 'utils/theme';

type Props = {
  tag?: any;
  children: any;
  color?: string;
  underline?: boolean;
  weight?: FontWeight;
};

export type FontWeight = 'Regular' | 'Medium' | 'SemiBold' | 'Bold';

function getFontWeightByName(name: FontWeight) {
  switch (name) {
    case 'Bold':
      return 700;
    case 'SemiBold':
      return 600;
    case 'Medium':
      return 500;
    case 'Regular':
      return 400;
    default:
      return 400;
  }
}
const StyledDynamicComponent = styled.div.attrs((props: any) => ({
  as: props.tag,
  className: props.className
}))<IStyledDynamicProps>`
  font-weight: ${(props) => props.weight};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
`;

const DynamicComponent = ({
  tag = 'div',
  color = THEME.colors.black,
  weight = 'Regular',
  children,
  underline = false,
  ...props
}: Props) => {
  const weightNumber = useMemo(() => getFontWeightByName(weight), [weight]);
  return (
    <StyledDynamicComponent
      underline={underline || false}
      weight={weightNumber}
      tag={tag}
      {...props}
      color={color}
    >
      {children}
    </StyledDynamicComponent>
  );
};

DynamicComponent.defaultProps = {
  tag: 'div',
  underline: false,
  className: '',
  weight: 'Regular'
};

export default DynamicComponent;

interface IStyledDynamicProps {
  tag: string;
  underline: boolean;
  className: string;
  weight: number;
}
