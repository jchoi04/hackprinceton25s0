import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Platform } from 'react-native';
import { useRouter, type Href } from 'expo-router';

// SVG imports
import HomeIcon from '../../assets/icons/HomeIcon.svg';
import ChatIcon from '../../assets/icons/ChatIcon.svg';
import CheckInIcon from '../../assets/icons/CheckInIcon.svg';
import TrendsIcon from '../../assets/icons/TrendsIcon.svg';
import SupportIcon from '../../assets/icons/SupportIcon.svg';

type NavItem = 'home' | 'chat' | 'check-in' | 'trends' | 'support';

interface BottomNavProps {
  active: NavItem;
}

const iconMap = {
  home: HomeIcon,
  chat: ChatIcon,
  'check-in': CheckInIcon,
  trends: TrendsIcon,
  support: SupportIcon,
};

const routeMap = {
  home: '/(tabs)/home',
  chat: '/(tabs)/chat',
  'check-in': '/(tabs)/checkin',
  trends: '/(tabs)/trends',
  support: '/(tabs)/support',
} as const;

const BottomNav: React.FC<BottomNavProps> = ({ active }) => {
  const router = useRouter();
  const [pressedIcon, setPressedIcon] = useState<NavItem | null>(null);

  const handlePress = (name: NavItem) => {
    setPressedIcon(name);
    setTimeout(() => {
      router.push(routeMap[name] as Href);
      setPressedIcon(null);
    }, 150);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.navContainer}>
        {/* Left and Right Buttons */}
        {(['home', 'chat', 'trends', 'support'] as NavItem[]).map((name) => {
          const IconComponent = iconMap[name];
          const isPressed = pressedIcon === name;
          const isActive = active === name || isPressed;

          return (
            <TouchableOpacity
              key={name}
              style={styles.iconWrapper}
              onPress={() => handlePress(name)}
            >
              <IconComponent width={28} height={28} fill={isActive ? '#fff' : '#fff'} />
              <Text style={styles.label}>{capitalize(name)}</Text>
            </TouchableOpacity>
          );
        })}

        {/* Center CheckIn Button */}
        <TouchableOpacity
          style={styles.centerButtonWrapper}
          onPress={() => handlePress('check-in')}
        >
          <View style={styles.centerButton}>
            <CheckInIcon width={32} height={32} fill="#fff" /> {/* Keep the icon white */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const capitalize = (name: string) => {
  if (name === 'check-in') return '';
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#9CB69C',
    alignItems: 'center',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 12 : 8,
    width: '100%',
    maxWidth: 500, // Prevents stretching on desktop
    position: 'relative',
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
  centerButtonWrapper: {
    position: 'absolute',
    top: -28,
    left: '50%',
    transform: [{ translateX: -32 }],
    zIndex: 10,
  },
  centerButton: {
    width: 64,
    height: 64,
    backgroundColor: '#9CB69C', // Match the circle color to the nav bar
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
});

export default BottomNav;
