import Logo from '@/components/logo';
import useThemeStore from '@/lib/store/theme';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Appbar, Menu } from 'react-native-paper';

export default function ThemeAppBar(props: NativeStackHeaderProps) {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const { setScheme } = useThemeStore();

    const handleSetScheme = (scheme: 'light' | 'dark' | 'system') => {
        setScheme(scheme);
        closeMenu();
    };

    return (
        <Appbar.Header {...props}>
            <Appbar.Content title={<Logo />} />
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Appbar.Action icon="theme-light-dark" onPress={openMenu} />}
            >
                <Menu.Item
                    leadingIcon="white-balance-sunny"
                    onPress={() => handleSetScheme('light')}
                    title="Light"
                />
                <Menu.Item
                    leadingIcon="moon-full"
                    onPress={() => handleSetScheme('dark')}
                    title="Dark"
                />
                <Menu.Item
                    leadingIcon="theme-light-dark"
                    onPress={() => handleSetScheme('system')}
                    title="System"
                />
            </Menu>
        </Appbar.Header>
    );
}