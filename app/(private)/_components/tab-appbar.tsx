
import Logo from '@/components/logo';
import useAuthStore from '@/lib/store/auth';
import useThemeStore from '@/lib/store/theme';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { router } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { Appbar, Avatar, Button, Menu } from 'react-native-paper';
export default function TabAppBar(props: BottomTabHeaderProps) {
    const { user, disconnect } = useAuthStore()
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const [visibleAcc, setVisibleAcc] = useState(false);
    const openMenuAcc = () => setVisibleAcc(true);
    const closeMenuAcc = () => setVisibleAcc(false);

    const { setScheme } = useThemeStore();

    const handleSetScheme = (scheme: 'light' | 'dark' | 'system') => {
        setScheme(scheme);
        closeMenu();
    };

    const handleClickMenuIcon = (callback: () => void) => {
        closeMenuAcc();
        callback()
    };

    return (
        <Appbar.Header {...props}>
            <Appbar.Content className='flex-row flex'
                title={<Logo />}
                mode="center-aligned"
            />
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
            <Menu
                visible={visibleAcc}
                onDismiss={closeMenuAcc}
                anchor={
                    <Button className="rounded-full" onPress={openMenuAcc}>
                        {
                            user?.image ?
                                <Avatar.Image size={28} source={{ uri: user.image! }} /> :
                                <Avatar.Icon size={28} icon="account" />
                        }
                    </Button>
                }
            >
                <View className='flex flex-col justify-center'>
                    <Menu.Item title={user?.name} />
                    <Menu.Item title={user?.email} />
                </View>
                <Menu.Item
                    leadingIcon="logout"
                    onPress={() => handleClickMenuIcon(() => {
                        disconnect()
                        router.replace("/(auth)/login")
                    })}
                    title="Logout"
                />

            </Menu>
        </Appbar.Header>
    );
}