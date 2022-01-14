import React, { MutableRefObject, ReactElement, RefAttributes } from 'react';
import SelectV3 from './SelectV3';
import { GroupBase } from './types';
import useStateManager, { StateManagerProps } from './useStateManager';
import useCreatable, { CreatableAdditionalProps } from './useCreatable';

export type CreatableProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> = StateManagerProps<Option, IsMulti, Group> &
  CreatableAdditionalProps<Option, Group>;

type CreatableSelect = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: CreatableProps<Option, IsMulti, Group> &
    RefAttributes<SelectV3<Option, IsMulti, Group>>
) => ReactElement;

const CreatableSelect = React.forwardRef(
  <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: CreatableProps<Option, IsMulti, Group>,
    ref:
      | ((instance: SelectV3<Option, IsMulti, Group> | null) => void)
      | MutableRefObject<SelectV3<Option, IsMulti, Group> | null>
      | null
  ) => {
    const creatableProps = useStateManager(props);
    const selectProps = useCreatable(creatableProps);

    return <SelectV3 ref={ref} {...selectProps} />;
  }
) as CreatableSelect;

export { useCreatable };
export default CreatableSelect;
