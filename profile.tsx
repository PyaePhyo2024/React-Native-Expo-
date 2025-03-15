import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Image } from "expo-image";
import { HelpCircleIcon, Icon, MailIcon, BellIcon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import ToggleSwitch from "@/components/ToggleSwitch";

import {
  ChevronRight,
  Clipboard,
  CreditCard,
  MapPin,
  User2,
} from "lucide-react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <VStack className="px-5" space="sm">
        {/*Profile image & name */}
        <VStack space="md" className="mt-6 items-center">
          <Image
            style={{ width: 70, height: 70 }}
            source={require("@/data/shop/profile.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <Text className="text-lg font-bold color-emerald-900">Pyae Phyo</Text>
        </VStack>

        {/*My orders */}
        <HStack className="mt-6 justify-between">
          <HStack space="sm" className="items-center">
            <Icon as={Clipboard} size="md" />
            <Text size="md" className="font-semibold color-black">
              My orders
            </Text>
          </HStack>
          <Pressable>
            <Icon as={ChevronRight} size="xl" className="text-gray-500" />
          </Pressable>
        </HStack>

        {/* line */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#c9c9c970",
            marginVertical: 15,
          }}
        />

        <VStack space="2xl">
          <Text className="font-bold color-black">SETTINGS</Text>

          {/*User profile*/}
          <HStack className="justify-between">
            <HStack space="sm" className="items-center">
              <Icon as={User2} size="md" />
              <Text size="md" className="font-semibold color-black">
                User profile
              </Text>
            </HStack>
            <Pressable>
              <Icon as={ChevronRight} size="xl" className="text-gray-500" />
            </Pressable>
          </HStack>

          {/*Allow push notifications*/}
          <VStack space="sm">
            <HStack space="sm" className="relative items-center">
              <Icon as={BellIcon} size="md" />
              <Text size="md" className="font-semibold color-black">
                Allow push notifications
              </Text>
              <Pressable className="absolute right-0">
                <ToggleSwitch />
              </Pressable>
            </HStack>

            <Text
              className="ml-7 font-semibold text-gray-500"
              style={{ fontSize: 13, lineHeight: 18 }}
            >
              Get updates on your sales, purchases and {"\n"}key activites
            </Text>

            {/*Payment methods*/}
            <HStack className="mt-4 justify-between">
              <HStack space="sm" className="items-center">
                <Icon as={CreditCard} size="md" />
                <Text size="md" className="font-semibold color-black">
                  Payment methods
                </Text>
              </HStack>
              <Pressable>
                <Icon as={ChevronRight} size="xl" className="text-gray-500" />
              </Pressable>
            </HStack>

            {/*Delivery address*/}
            <HStack className="mt-4 justify-between">
              <HStack space="sm" className="items-center">
                <Icon as={MapPin} size="md" />
                <Text size="md" className="font-semibold color-black">
                  Delivery address
                </Text>
              </HStack>
              <Pressable>
                <Icon as={ChevronRight} size="xl" className="text-gray-500" />
              </Pressable>
            </HStack>

            {/* line */}
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#c9c9c970",
                marginVertical: 15,
              }}
            />

            <Text className="font-bold color-black">HELP</Text>

            {/*FAQ*/}
            <HStack className="mt-4 items-center" space="sm">
              <Icon as={HelpCircleIcon} size="md" />
              <Text size="md" className="font-semibold color-black">
                FAQ
              </Text>
            </HStack>

            {/*Support*/}
            <HStack className="mt-4 items-center" space="sm">
              <Icon as={MailIcon} size="md" />
              <Text size="md" className="font-semibold color-black">
                Support
              </Text>
            </HStack>
          </VStack>

          <VStack space="md" className="mt-3">
            <Text className="text-md font-semibold color-emerald-800">
              Log out
            </Text>
            <Text className="text-md font-semibold color-emerald-800">
              Privacy Policy | Terms & Conditions
            </Text>
            <Text className="text-md font-semibold color-emerald-800">
              1.0.0
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default Profile;
