import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddMeetingScreen from './screens/AddMeetingScreen';
import ViewMeetingsScreen from './screens/ViewMeetingsScreen';
import EditMeetingScreen from './screens/EditMeetingScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const navigateTo = (screen, meeting = null) => {
    setCurrentScreen(screen);
    setSelectedMeeting(meeting);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={navigateTo} />;
      case 'add':
        return <AddMeetingScreen onNavigate={navigateTo} />;
      case 'view':
        return <ViewMeetingsScreen onNavigate={navigateTo} />;
      case 'edit':
        return <EditMeetingScreen onNavigate={navigateTo} meeting={selectedMeeting} />;
      default:
        return <HomeScreen onNavigate={navigateTo} />;
    }
  };

  return <View style={{ flex: 1 }}>{renderScreen()}</View>;
}