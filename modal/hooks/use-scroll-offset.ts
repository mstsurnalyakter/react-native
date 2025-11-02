import { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';

export function useScrollOffset(ref: any) {
  const scrollOffset = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollOffset.value = event.contentOffset?.y ?? 0;
  });

  return { scrollOffset, onScroll };
}
