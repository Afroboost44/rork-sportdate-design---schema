import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MessageCircle, Search } from "lucide-react-native";
import Colors from "@/constants/colors";

interface ChatPreview {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  avatar: string;
}

const mockChats: ChatPreview[] = [
  {
    id: '1',
    name: 'Beach Volleyball Group',
    lastMessage: "See you tomorrow at 6pm!",
    time: '2h',
    unread: true,
    avatar: '🏐',
  },
  {
    id: '2',
    name: 'Sarah K.',
    lastMessage: "Thanks for joining the yoga session",
    time: '1d',
    unread: false,
    avatar: '🧘',
  },
  {
    id: '3',
    name: 'Downtown Gym',
    lastMessage: "Your booking is confirmed",
    time: '2d',
    unread: false,
    avatar: '🏀',
  },
];

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Messages</Text>
        </View>

        <View style={styles.searchContainer}>
          <Search size={18} color={Colors.text.muted} />
          <Text style={styles.searchPlaceholder}>Search messages...</Text>
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {mockChats.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            style={styles.chatCard}
            activeOpacity={0.7}
          >
            <View style={styles.avatarContainer}>
              <Text style={styles.avatar}>{chat.avatar}</Text>
              {chat.unread && <View style={styles.unreadDot} />}
            </View>

            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={[styles.chatName, chat.unread && styles.chatNameUnread]}>
                  {chat.name}
                </Text>
                <Text style={styles.chatTime}>{chat.time}</Text>
              </View>
              <Text
                style={[styles.lastMessage, chat.unread && styles.lastMessageUnread]}
                numberOfLines={1}
              >
                {chat.lastMessage}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {mockChats.length === 0 && (
          <View style={styles.emptyState}>
            <MessageCircle size={48} color={Colors.text.muted} />
            <Text style={styles.emptyTitle}>No messages yet</Text>
            <Text style={styles.emptyText}>
              Start a conversation with activity organizers or participants!
            </Text>
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgrounds.main,
  },
  safeArea: {
    backgroundColor: Colors.backgrounds.main,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: Colors.text.main,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: Colors.backgrounds.card,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchPlaceholder: {
    fontSize: 15,
    color: Colors.text.muted,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 8,
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
  avatarContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.backgrounds.card,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    fontSize: 24,
  },
  unreadDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.branding.primaryPink,
    borderWidth: 2,
    borderColor: Colors.backgrounds.main,
  },
  chatContent: {
    flex: 1,
    gap: 4,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text.main,
  },
  chatNameUnread: {
    fontWeight: '700' as const,
  },
  chatTime: {
    fontSize: 13,
    color: Colors.text.muted,
  },
  lastMessage: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  lastMessageUnread: {
    color: Colors.text.main,
    fontWeight: '500' as const,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    gap: 12,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600' as const,
    color: Colors.text.main,
    marginTop: 8,
  },
  emptyText: {
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  bottomPadding: {
    height: 20,
  },
});
