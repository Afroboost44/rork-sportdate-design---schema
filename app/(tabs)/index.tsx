import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapPin, Users, Clock, Zap } from "lucide-react-native";
import { mockOffers } from "@/mocks/offers";
import Colors from "@/constants/colors";

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 32;

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Discover</Text>
          <Text style={styles.headerSubtitle}>Find your next adventure</Text>
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {mockOffers.map((offer) => (
          <TouchableOpacity
            key={offer.id}
            style={styles.card}
            activeOpacity={0.9}
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: offer.image_url }}
                style={styles.image}
                contentFit="cover"
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.gradient}
              />
              {offer.is_boosted && (
                <View style={styles.boostBadge}>
                  <Zap size={12} color={Colors.actions.warning} fill={Colors.actions.warning} />
                  <Text style={styles.boostText}>Boosted</Text>
                </View>
              )}
              <View style={styles.imageContent}>
                <Text style={styles.sport}>{offer.sport}</Text>
                <Text style={styles.title}>{offer.title}</Text>
              </View>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.description} numberOfLines={2}>
                {offer.description}
              </Text>

              <View style={styles.infoRow}>
                <MapPin size={14} color={Colors.text.secondary} />
                <Text style={styles.infoText}>{offer.location}</Text>
              </View>

              <View style={styles.bottomRow}>
                <View style={styles.statsRow}>
                  <View style={styles.stat}>
                    <Users size={14} color={Colors.badges.verified} />
                    <Text style={styles.statText}>
                      {offer.current_participants}/{offer.max_participants}
                    </Text>
                  </View>
                  <View style={styles.stat}>
                    <Clock size={14} color={Colors.text.secondary} />
                    <Text style={styles.statText}>
                      {new Date(offer.datetime).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Text>
                  </View>
                </View>

                <View style={styles.priceContainer}>
                  <Text style={styles.price}>${offer.price}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}

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
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: Colors.text.main,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: Colors.backgrounds.card,
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 240,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
  },
  boostBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  boostText: {
    color: Colors.actions.warning,
    fontSize: 12,
    fontWeight: '600' as const,
  },
  imageContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  sport: {
    color: Colors.branding.primaryPink,
    fontSize: 13,
    fontWeight: '600' as const,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: Colors.text.main,
  },
  cardBody: {
    padding: 16,
    gap: 12,
  },
  description: {
    fontSize: 14,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontSize: 13,
    color: Colors.text.secondary,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 13,
    color: Colors.text.secondary,
    fontWeight: '500' as const,
  },
  priceContainer: {
    backgroundColor: Colors.branding.primaryPink,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: Colors.text.main,
  },
  bottomPadding: {
    height: 20,
  },
});
