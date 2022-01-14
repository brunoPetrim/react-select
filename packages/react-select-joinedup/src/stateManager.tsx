import React, { MutableRefObject, ReactElement, RefAttributes } from 'react';

import { GroupBase } from './types';
import SelectV3 from './SelectV3';
import useStateManager from './useStateManager';
import type { StateManagerProps } from './useStateManager';
export type { StateManagerProps };

type StateManagedSelect = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: StateManagerProps<Option, IsMulti, Group> &
    RefAttributes<SelectV3<Option, IsMulti, Group>>
) => ReactElement;

const StateManagedSelect = React.forwardRef(
  <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: StateManagerProps<Option, IsMulti, Group>,
    ref:
      | ((instance: SelectV3<Option, IsMulti, Group> | null) => void)
      | MutableRefObject<SelectV3<Option, IsMulti, Group> | null>
      | null
  ) => {
    const baseSelectProps = useStateManager(props);

    return <SelectV3 ref={ref} {...baseSelectProps} />;
  }
) as StateManagedSelect;

export default StateManagedSelect;
