# 图标

以下介绍几种图标的使用方式。

## 组件库图标

使用 `ant-design-vue` 提供的图标

```vue
<template>
  <StarOutlined />
  <StarFilled />
  <StarTwoTone twoToneColor="#eb2f96" />
</template>

<script>
  import { defineComponent } from 'vue';
  import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons-vue';
  export default defineComponent({
    components: { StarOutlined, StarFilled, StarTwoTone },
  });
</script>
```

## Svg Sprite 图标

### 使用

将需要的 svg 图标放到`src/assets/icons`内

例: test.svg

1. 使用`SvgIcon`组件进行展示

```vue
<template>
  <SvgIcon name="test" />
</template>

<script>
  import { defineComponent } from 'vue';
  import { SvgIcon } from '/@/components/Icon';
  export default defineComponent({
    components: { SvgIcon },
  });
</script>
```

2. 使用`Icon`组件进行展示

以 `｜svg` 结尾会自动使用`SvgIcon`组件

```vue
<template>
  <Icon name="test|svg" />
</template>

<script>
  import { defineComponent } from 'vue';
  import { Icon } from '/@/components/Icon';
  export default defineComponent({
    components: { Icon },
  });
</script>
```

## 待续...