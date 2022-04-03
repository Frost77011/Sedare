import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
	useFonts,
} from "@expo-google-fonts/dev";

export default function App() {

	let [fontsLoaded] = useFonts({
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
			<View style={stylesheet._Info_Screen}>
				<Component__Navbar
					variant1_left={-1}
					variant1_right={"auto"}
					variant1_top={703}
					variant1_bottom={"auto"}
					variant1_transform={[{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" },]}
				/>
				<View style={[stylesheet._Info_Screen_2, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
					<Text style={[stylesheet._Info_Screen_2, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
						Info Screen
					</Text>
				</View>
				<Component__Header_With_Back
					variant1_text1={"Home"}
					variant1_text2={"< Back"}
					variant1_left={0}
					variant1_right={"auto"}
					variant1_top={0}
					variant1_bottom={"auto"}
					variant1_transform={[{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" },]}
				/>
				<Svg style={stylesheet._Rectangle_2} fill={"rgba(166, 211, 136, 1)"}>
					<Path fillRule={"nonzero"} d={"M 0 0 L 325 0 L 325 81 L 0 81 L 0 0 Z"} strokeLinejoin={"miter"} />
					<Path fillRule={"nonzero"} d={"M 0 124.5 C 0 107.93145751953125 13.43145751953125 94.5 30 94.5 L 295 94.5 C 311.56854248046875 94.5 325 107.93145751953125 325 124.5 L 325 145.5 C 325 162.06854248046875 311.56854248046875 175.5 295 175.5 L 29.999998092651367 175.5 C 13.431455612182617 175.5 0 162.06854248046875 0 145.5 L 0 124.5 Z"} strokeLinejoin={"miter"} />
				</Svg>
				<View style={[stylesheet._Repeat_Recent_Meditation, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
					<Text style={[stylesheet._Repeat_Recent_Meditation, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
						Repeat Recent Meditation
					</Text>
				</View>
				<View style={[stylesheet._Start_Random_Meditation, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
					<Text style={[stylesheet._Start_Random_Meditation, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
						Start Random Meditation
					</Text>
				</View>
				<Component__Calendar
					variant1_text1={"March 2022"}
					variant1_text2={"Mo"}
					variant1_text3={"Tu"}
					variant1_text4={"We"}
					variant1_text5={"Th"}
					variant1_text6={"Fr"}
					variant1_text7={"Sa"}
					variant1_text8={"Su"}
					variant1_text9={"1"}
					variant1_text10={"2"}
					variant1_text11={"3"}
					variant1_text12={"4"}
					variant1_text13={"5"}
					variant1_text14={"6"}
					variant1_text15={"7"}
					variant1_text16={"8"}
					variant1_text17={"9"}
					variant1_text18={"10"}
					variant1_text19={"11"}
					variant1_text20={"12"}
					variant1_text21={"13"}
					variant1_text22={"14"}
					variant1_text23={"15"}
					variant1_text24={"16"}
					variant1_text25={"17"}
					variant1_text26={"18"}
					variant1_text27={"19"}
					variant1_text28={"20"}
					variant1_text29={"21"}
					variant1_text30={"22"}
					variant1_text31={"23"}
					variant1_text32={"24"}
					variant1_text33={"25"}
					variant1_text34={"26"}
					variant1_text35={"27"}
					variant1_text36={"28"}
					variant1_text37={"29"}
					variant1_text38={"30"}
					variant1_text39={"1"}
					variant1_text40={"2"}
					variant1_text41={"3"}
					variant1_text42={"4"}
					variant1_text43={"5"}
					variant1_left={55}
					variant1_right={"auto"}
					variant1_top={349}
					variant1_bottom={"auto"}
					variant1_transform={[{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" },]}
				/>
				<View style={[stylesheet._New_Meditation, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
					<Text style={[stylesheet._New_Meditation, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
						New Meditation
					</Text>
				</View>
			</View>
		</ScrollView>
	)
}
const Component__Navbar = ({
	variant1_left,
	variant1_right,
	variant1_top,
	variant1_bottom,
	variant1_transform,
}) => {
	return (
		<View style={[
			component__Navbar_stylesheet._Navbar,
			{
				left: variant1_left,
				right: variant1_right,
				top: variant1_top,
				bottom: variant1_bottom,
				transform: variant1_transform,
			},
		]}>
			<View style={component__Navbar_stylesheet._Rectangle_3}>
			</View>
			<Image style={component__Navbar_stylesheet._Shore_1} source={{ uri: imageUrl_Shore_1 }}>
			</Image>
			<Component__Calendar_Button
				variant1_width={132.07998657226562}
				variant1_height={104}
				variant1_borderTopLeftRadius={30}
				variant1_borderTopRightRadius={0}
				variant1_borderBottomRightRadius={0}
				variant1_borderBottomLeftRadius={0}
				variant1_left={0}
				variant1_right={"auto"}
				variant1_transform={[{ translateX: 0 }, { translateY: 37 }, { rotate: "0deg" },]}
			/>
			<Component__Profile_Button
				variant1_width={132.08001708984375}
				variant1_borderTopLeftRadius={0}
				variant1_borderTopRightRadius={20}
				variant1_borderBottomRightRadius={0}
				variant1_borderBottomLeftRadius={0}
				variant1_left={257.91998291015625}
				variant1_right={"auto"}
				variant1_transform={[{ translateX: 0 }, { translateY: 37 }, { rotate: "0deg" },]}
			/>
			<Component__Meditate_Button
				variant1_width={124.80001831054688}
				variant1_left={132.0799560546875}
				variant1_right={"auto"}
				variant1_transform={[{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" },]}
			/>
			<Component__codicon_account
				variant1_width={70}
				variant1_height={70}
				variant1_left={289}
				variant1_right={"auto"}
				variant1_transform={[{ translateX: 0 }, { translateY: 54 }, { rotate: "0deg" },]}
			/>
			<Component__Calendar_Button
				variant1_left={-2}
				variant1_right={"auto"}
				variant1_transform={[{ translateX: 0 }, { translateY: 34 }, { rotate: "0deg" },]}
			/>
		</View>
	)
}
const Component__Calendar_Button = ({
	variant1_width,
	variant1_height,
	variant1_borderTopLeftRadius,
	variant1_borderTopRightRadius,
	variant1_borderBottomRightRadius,
	variant1_borderBottomLeftRadius,
	variant1_left,
	variant1_right,
	variant1_transform,
}) => {
	return (
		<View style={[
			component__Calendar_Button_stylesheet._Calendar_Button,
			{
				width: variant1_width,
				height: variant1_height,
				borderTopLeftRadius: variant1_borderTopLeftRadius,
				borderTopRightRadius: variant1_borderTopRightRadius,
				borderBottomRightRadius: variant1_borderBottomRightRadius,
				borderBottomLeftRadius: variant1_borderBottomLeftRadius,
				left: variant1_left,
				right: variant1_right,
				transform: variant1_transform,
			},
		]}>
			<Image style={component__Calendar_Button_stylesheet._Rectangle_4} source={{ uri: imageUrl_Rectangle_4 }}>
			</Image>
		</View>
	)
}
const Component__Profile_Button = ({
	variant1_width,
	variant1_borderTopLeftRadius,
	variant1_borderTopRightRadius,
	variant1_borderBottomRightRadius,
	variant1_borderBottomLeftRadius,
	variant1_left,
	variant1_right,
	variant1_transform,
}) => {
	return (
		<View style={[
			component__Profile_Button_stylesheet._Profile_Button,
			{
				width: variant1_width,
				borderTopLeftRadius: variant1_borderTopLeftRadius,
				borderTopRightRadius: variant1_borderTopRightRadius,
				borderBottomRightRadius: variant1_borderBottomRightRadius,
				borderBottomLeftRadius: variant1_borderBottomLeftRadius,
				left: variant1_left,
				right: variant1_right,
				transform: variant1_transform,
			},
		]}>
			<View style={component__Profile_Button_stylesheet._Rectangle_5}>
			</View>
			<Image style={component__Profile_Button_stylesheet._Rectangle_6} source={{ uri: imageUrl_Rectangle_6 }}>
			</Image>
		</View>
	)
}
const Component__Meditate_Button = ({
	variant1_width,
	variant1_left,
	variant1_right,
	variant1_transform,
}) => {
	return (
		<View style={[
			component__Meditate_Button_stylesheet._Meditate_Button,
			{
				width: variant1_width,
				left: variant1_left,
				right: variant1_right,
				transform: variant1_transform,
			},
		]}>
			<View style={component__Meditate_Button_stylesheet._Larger_Circle_Main_Button}>
			</View>
			<View style={component__Meditate_Button_stylesheet._Group}>
				<Svg style={component__Meditate_Button_stylesheet._Vector} fill={"rgba(0,0,0,0)"}>
					<Path fillRule={"nonzero"} d={"M 10.18933359781901 0 L 12.477333068847656 4.920003255208333 C 12.477333068847656 4.920003255208333 22.762664794921875 7.103998819986979 22.762664794921875 12.298665364583332 C 22.762664794921875 15.989331881205239 18.186665852864582 15.989334106445312 18.186665852864582 15.989334106445312 L 6 15.989334106445312 L 0 12.656000773111979"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={1.5} stroke={"rgba(0, 0, 0, 1)"} />
				</Svg>
				<Svg style={component__Meditate_Button_stylesheet._Vector_2} fill={"rgba(0,0,0,0)"}>
					<Path fillRule={"nonzero"} d={"M 12.573333151053392 0 L 10.287998757817116 4.920003255208333 C 10.287998757817116 4.920003255208333 0 7.103998819986979 0 12.298665364583332 C 0 15.989331881205239 4.575999190407679 15.989334106445312 4.575999190407679 15.989334106445312 L 10.095999947754956 15.989334106445312 L 16.09600027338928 12.656000773111979 L 23.429332733154297 7.9893341064453125"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={1.5} stroke={"rgba(0, 0, 0, 1)"} />
				</Svg>
				<Svg style={component__Meditate_Button_stylesheet._Vector_3} fill={"rgba(0,0,0,0)"}>
					<Path fillRule={"nonzero"} d={"M 0 34.46933364868164 C 0 34.46933364868164 5.714666366577148 33.24000044102409 9.143999735514322 32.0106670744208 C 12.570666313171387 14.789332617515168 22.853333314259846 16.01866717621139 24 16.01866717621139 C 25.143999973932903 16.01866717621139 35.4293311436971 14.789332617515168 38.855997721354164 32.0106670744208 C 42.285331090291336 33.23733380859132 48 34.46933364868164 48 34.46933364868164 L 0 34.46933364868164 Z M 24 10.66666706015755 C 25.414487997690838 10.666667060157549 26.771041154861447 10.104764119024011 27.771235148111977 9.104570088876555 C 28.771429141362507 8.104376058729098 29.333333333333332 6.747821579949749 29.333333333333332 5.333333530078775 C 29.333333333333332 3.918845480207801 28.771429141362507 2.5622910014284512 27.771235148111977 1.5620969712809953 C 26.771041154861447 0.5619029411335397 25.414487997690838 1.1842379366197642e-15 24 0 C 22.585512002309162 1.1842379366197642e-15 21.22895884513855 0.5619029411335397 20.22876485188802 1.5620969712809953 C 19.22857085863749 2.5622910014284512 18.666666666666664 3.918845480207801 18.666666666666664 5.333333530078775 C 18.666666666666664 6.747821579949749 19.22857085863749 8.104376058729098 20.22876485188802 9.104570088876555 C 21.22895884513855 10.104764119024011 22.585512002309162 10.666667060157549 24 10.66666706015755 Z"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={1.5} stroke={"rgba(0, 0, 0, 1)"} />
				</Svg>
			</View>
		</View>
	)
}
const Component__codicon_account = ({
	variant1_width,
	variant1_height,
	variant1_left,
	variant1_right,
	variant1_transform,
}) => {
	return (
		<View style={[
			component__codicon_account_stylesheet._codicon_account,
			{
				width: variant1_width,
				height: variant1_height,
				left: variant1_left,
				right: variant1_right,
				transform: variant1_transform,
			},
		]}>
			<Svg style={component__codicon_account_stylesheet._Vector_4} fill={"rgba(0, 0, 0, 1)"}>
				<Path fillRule={"nonzero"} d={"M 16 7.992000102996826 C 16 3.5799999237060547 12.41599988937378 0 8 0 C 3.5840001106262207 0 0 3.5799999237060547 0 7.992000102996826 C 0 10.422000169754028 1.1039999723434448 12.611999750137329 2.8320000171661377 14.081999778747559 C 2.848000017926097 14.097999779507518 2.864000082015991 14.098000319674611 2.864000082015991 14.11400032043457 C 3.008000075817108 14.22600032389164 3.1520000398159027 14.337999805808067 3.312000036239624 14.449999809265137 C 3.3920000344514847 14.49799980968237 3.4560000151395798 14.560999996960163 3.5360000133514404 14.625 C 4.858067870140076 15.5213662981987 6.418709635734558 16.000358002376743 8.015999794006348 16 C 9.613289952278137 16.000358002376743 11.173932433128357 15.5213662981987 12.496000289916992 14.625 C 12.576000288128853 14.576999999582767 12.640000268816948 14.51400015130639 12.720000267028809 14.46500015258789 C 12.864000260829926 14.35400015115738 13.024000227451324 14.242000117897987 13.168000221252441 14.130000114440918 C 13.1840002220124 14.114000113680959 13.199999809265137 14.113999573513865 13.199999809265137 14.097999572753906 C 14.895999789237976 12.610999584197998 16 10.422000169754028 16 7.992000102996826 L 16 7.992000102996826 Z M 8 14.993000030517578 C 6.496000051498413 14.993000030517578 5.120000004768372 14.512999773025513 3.9839999675750732 13.71399974822998 C 3.9999999683350325 13.585999742150307 4.032000128179789 13.459000334143639 4.064000129699707 13.331000328063965 C 4.159338071942329 12.984105259180069 4.299165740609169 12.651005744934082 4.480000019073486 12.34000015258789 C 4.656000018119812 12.036000162363052 4.8639998733997345 11.764000162482262 5.119999885559082 11.52400016784668 C 5.359999880194664 11.284000173211098 5.647999882698059 11.061000227928162 5.935999870300293 10.885000228881836 C 6.239999860525131 10.70900022983551 6.56000018119812 10.580999657511711 6.9120001792907715 10.484999656677246 C 7.26673811674118 10.389382965862751 7.6326023042202 10.341296360013075 8 10.342000007629395 C 9.09065067768097 10.334275664296001 10.141228079795837 10.752641022205353 10.928000450134277 11.508000373840332 C 11.296000450849533 11.876000374555588 11.583999812602997 12.308000445365906 11.791999816894531 12.803000450134277 C 11.9039998203516 13.091000437736511 11.983999587595463 13.394999742507935 12.031999588012695 13.71399974822998 C 10.851176738739014 14.544158399105072 9.44343364238739 14.990712213562801 8 14.993000030517578 Z M 5.552000045776367 7.5929999351501465 C 5.411021888256073 7.270219832658768 5.340127615723759 6.921202629804611 5.343999862670898 6.568999767303467 C 5.343999862670899 6.217999756336212 5.40800005197525 5.86599999666214 5.552000045776367 5.546000003814697 C 5.696000039577484 5.226000010967255 5.887999787926674 4.938999876379967 6.127999782562256 4.698999881744385 C 6.367999777197838 4.458999887108803 6.655999839305878 4.268000066280365 6.97599983215332 4.124000072479248 C 7.295999825000763 3.980000078678131 7.648000001907349 3.9159998893737793 8 3.9159998893737793 C 8.368000000715256 3.9159998893737793 8.704000174999237 3.980000078678131 9.02400016784668 4.124000072479248 C 9.344000160694122 4.268000066280365 9.631999745965004 4.459999889135361 9.871999740600586 4.698999881744385 C 10.111999735236168 4.938999876379967 10.303999960422516 5.226999998092651 10.447999954223633 5.546000003814697 C 10.59199994802475 5.86599999666214 10.656000137329102 6.217999756336212 10.656000137329102 6.568999767303467 C 10.656000137329102 6.9369997680187225 10.59199994802475 7.273000001907349 10.447999954223633 7.5920000076293945 C 10.30902735888958 7.907265543937683 10.11384816467762 8.194611966609955 9.871999740600586 8.4399995803833 C 9.626529440283775 8.681490555405617 9.33918821811676 8.87632791697979 9.02400016784668 9.015000343322754 C 8.362827241420746 9.286713629961014 7.6211729645729065 9.286713629961014 6.960000038146973 9.015000343322754 C 6.644811987876892 8.87632791697979 6.357470288872719 8.681490555405617 6.111999988555908 8.4399995803833 C 5.8698146641254425 8.198187693953514 5.679293185472488 7.909684091806412 5.552000045776367 7.5920000076293945 L 5.552000045776367 7.5929999351501465 Z M 12.97599983215332 12.89900016784668 C 12.97599983215332 12.867000166326761 12.960000038146973 12.851000245660543 12.960000038146973 12.819000244140625 C 12.802638471126556 12.318417310714722 12.570698320865631 11.844422668218613 12.272000312805176 11.413000106811523 C 11.973023116588593 10.978380709886551 11.605594366788864 10.59507966041565 11.184000015258789 10.277999877929688 C 10.86202421784401 10.035778567194939 10.51302245259285 9.831746935844421 10.144000053405762 9.670000076293945 C 10.311882108449936 9.559245102107525 10.467433586716652 9.430847495794296 10.607999801635742 9.286999702453613 C 10.84654001891613 9.051503375172615 11.056031063199043 8.788297921419144 11.232000350952148 8.503000259399414 C 11.5863596200943 7.920809030532837 11.769362596794963 7.250490367412567 11.760000228881836 6.568999767303467 C 11.764948781579733 6.064514696598053 11.66695150732994 5.564321011304855 11.472000122070312 5.098999977111816 C 11.279521495103836 4.6506398022174835 11.002473771572113 4.243556320667267 10.656000137329102 3.9000000953674316 C 10.310040354728699 3.5600309669971466 9.902879416942596 3.288590043783188 9.456000328063965 3.0999999046325684 C 8.989905804395676 2.9053935408592224 8.489062666893005 2.807742823380977 7.984000205993652 2.812999963760376 C 7.47886860370636 2.808059399481863 6.9780228435993195 2.9060510396957397 6.51200008392334 3.1010000705718994 C 6.061253607273102 3.289187476038933 5.653109908103943 3.5663847029209137 5.311999797821045 3.9159998893737793 C 4.972041487693787 4.26158681511879 4.700593993067741 4.6684190928936005 4.51200008392334 5.114999771118164 C 4.3170486986637115 5.580320805311203 4.2190514244139194 6.080514967441559 4.223999977111816 6.585000038146973 C 4.223999977111816 6.937000036239624 4.272000029683113 7.273000001907349 4.368000030517578 7.5920000076293945 C 4.464000031352043 7.9280000030994415 4.592000126838684 8.232000052928925 4.76800012588501 8.519000053405762 C 4.928000122308731 8.807000041007996 5.152000203728676 9.063000455498695 5.392000198364258 9.303000450134277 C 5.536000192165375 9.447000443935394 5.6960002183914185 9.573999866843224 5.872000217437744 9.685999870300293 C 5.5018351674079895 9.852060601115227 5.152719259262085 10.061530411243439 4.831999778747559 10.3100004196167 C 4.41599977016449 10.630000412464142 4.047999948263168 11.012999892234802 3.74399995803833 11.428999900817871 C 3.442258894443512 11.858631283044815 3.2100799679756165 12.333113431930542 3.055999994277954 12.835000038146973 C 3.039999993517995 12.867000039666891 3.0399999618530273 12.898999961093068 3.0399999618530273 12.914999961853027 C 1.775999903678894 11.635999917984009 0.9919999837875366 9.910000085830688 0.9919999837875366 7.992000102996826 C 0.9919999837875366 4.140000104904175 4.144000053405762 0.9909999966621399 8 0.9909999966621399 C 11.855999946594238 0.9909999966621399 15.008000373840332 4.140000104904175 15.008000373840332 7.992000102996826 C 15.005906040314585 9.831957817077637 14.275318145751953 11.59622585773468 12.97599983215332 12.89900016784668 L 12.97599983215332 12.89900016784668 Z"} strokeLinejoin={"miter"} />
			</Svg>
		</View>
	)
}
const Component__Header_With_Back = ({
	variant1_left,
	variant1_right,
	variant1_top,
	variant1_bottom,
	variant1_transform,
	variant1_text1,
	variant1_text2,
}) => {
	return (
		<View style={[
			component__Header_With_Back_stylesheet._Header_With_Back,
			{
				left: variant1_left,
				right: variant1_right,
				top: variant1_top,
				bottom: variant1_bottom,
				transform: variant1_transform,
			},
		]}>
			<View style={component__Header_With_Back_stylesheet._TOP}>
				<Image style={component__Header_With_Back_stylesheet._Fresh_Turboscent_1} source={{ uri: imageUrl_Fresh_Turboscent_1 }}>
				</Image>
				<View style={[component__Header_With_Back_stylesheet._Find_Your_Calm_Place, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
					<Text style={[component__Header_With_Back_stylesheet._Find_Your_Calm_Place, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
						{variant1_text1}
					</Text>
				</View>
			</View>
			<Component__Back_Button
				variant1_text1={variant1_text2}
				variant1_left={-16}
				variant1_right={"auto"}
				variant1_transform={[{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" },]}
			/>
		</View>
	)
}
const Component__Back_Button = ({
	variant1_left,
	variant1_right,
	variant1_transform,
	variant1_text1,
}) => {
	return (
		<View style={[
			component__Back_Button_stylesheet._Back_Button,
			{
				left: variant1_left,
				right: variant1_right,
				transform: variant1_transform,
			},
		]}>
			<View style={component__Back_Button_stylesheet._Rectangle_14}>
			</View>
			<Component_____Back
				variant1_text1={variant1_text1}
				variant1_left={32}
				variant1_right={"auto"}
				variant1_transform={[{ translateX: 0 }, { translateY: 21 }, { rotate: "0deg" },]}
			/>
		</View>
	)
}
const Component_____Back = ({
	variant1_left,
	variant1_right,
	variant1_transform,
	variant1_text1,
}) => {
	return (
		<View style={[
			component_____Back_stylesheet.____Back,
			{
				left: variant1_left,
				right: variant1_right,
				transform: variant1_transform,
			},
		]}>
			<View style={[component_____Back_stylesheet.____Back_2, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
				<Text style={[component_____Back_stylesheet.____Back_2, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
					{variant1_text1}
				</Text>
			</View>
		</View>
	)
}
const Component__Calendar = ({
	variant1_left,
	variant1_right,
	variant1_top,
	variant1_bottom,
	variant1_transform,
	variant1_text1,
	variant1_text2,
	variant1_text3,
	variant1_text4,
	variant1_text5,
	variant1_text6,
	variant1_text7,
	variant1_text8,
	variant1_text9,
	variant1_text10,
	variant1_text11,
	variant1_text12,
	variant1_text13,
	variant1_text14,
	variant1_text15,
	variant1_text16,
	variant1_text17,
	variant1_text18,
	variant1_text19,
	variant1_text20,
	variant1_text21,
	variant1_text22,
	variant1_text23,
	variant1_text24,
	variant1_text25,
	variant1_text26,
	variant1_text27,
	variant1_text28,
	variant1_text29,
	variant1_text30,
	variant1_text31,
	variant1_text32,
	variant1_text33,
	variant1_text34,
	variant1_text35,
	variant1_text36,
	variant1_text37,
	variant1_text38,
	variant1_text39,
	variant1_text40,
	variant1_text41,
	variant1_text42,
	variant1_text43,
}) => {
	return (
		<View style={[
			component__Calendar_stylesheet._Calendar,
			{
				left: variant1_left,
				right: variant1_right,
				top: variant1_top,
				bottom: variant1_bottom,
				transform: variant1_transform,
			},
		]}>
			<View style={component__Calendar_stylesheet._Days}>
				<Component__Row
					variant1_text1={variant1_text1}
					variant1_text2={variant1_text2}
					variant1_text3={variant1_text3}
					variant1_text4={variant1_text4}
					variant1_text5={variant1_text5}
					variant1_text6={variant1_text6}
					variant1_text7={variant1_text7}
					variant1_minWidth={0}
					variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
				/>
				<Component__Row
					variant1_text1={variant1_text8}
					variant1_text2={variant1_text9}
					variant1_text3={variant1_text10}
					variant1_text4={variant1_text11}
					variant1_text5={variant1_text12}
					variant1_text6={variant1_text13}
					variant1_text7={variant1_text14}
					variant1_minWidth={0}
					variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
				/>
				<Component__Row
					variant1_text1={variant1_text15}
					variant1_text2={variant1_text16}
					variant1_text3={variant1_text17}
					variant1_text4={variant1_text18}
					variant1_text5={variant1_text19}
					variant1_text6={variant1_text20}
					variant1_text7={variant1_text21}
					variant1_minWidth={0}
					variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
				/>
				<Component__Row
					variant1_text1={variant1_text22}
					variant1_text2={variant1_text23}
					variant1_text3={variant1_text24}
					variant1_text4={variant1_text25}
					variant1_text5={variant1_text26}
					variant1_text6={variant1_text27}
					variant1_text7={variant1_text28}
					variant1_minWidth={0}
					variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
				/>
				<Component__Row
					variant1_text1={variant1_text29}
					variant1_text2={variant1_text30}
					variant1_text3={variant1_text31}
					variant1_text4={variant1_text32}
					variant1_text5={variant1_text33}
					variant1_text6={variant1_text34}
					variant1_text7={variant1_text35}
					variant1_minWidth={0}
					variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
				/>
				<Component__Row
					variant1_text1={variant1_text36}
					variant1_text2={variant1_text37}
					variant1_text3={variant1_text38}
					variant1_text4={variant1_text39}
					variant1_text5={variant1_text40}
					variant1_text6={variant1_text41}
					variant1_text7={variant1_text42}
					variant1_minWidth={0}
					variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
				/>
			</View>
			<View style={component__Calendar_stylesheet._Header}>
				<View style={[component__Calendar_stylesheet._March_2022, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
					<Text style={[component__Calendar_stylesheet._March_2022, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
						{variant1_text43}
					</Text>
				</View>
				<View style={component__Calendar_stylesheet._Group_7}>
					<View style={component__Calendar_stylesheet._icon___chevron_right}>
						<Svg style={component__Calendar_stylesheet._Vector_2__Stroke_} fill={"rgba(0, 0, 0, 1)"}>
							<Path fillRule={"evenodd"} d={"M 0 1.4142135381698608 L 1.4142135381698608 0 L 7.207106590270996 5.792893409729004 L 13 0 L 14.414213180541992 1.4142135381698608 L 7.207106590270996 8.621320724487305 L 0 1.4142135381698608 Z"} strokeLinejoin={"miter"} />
						</Svg>
					</View>
					<View style={component__Calendar_stylesheet._icon___chevron_left}>
						<Svg style={component__Calendar_stylesheet._Vector_2__Stroke__2} fill={"rgba(0, 0, 0, 1)"}>
							<Path fillRule={"evenodd"} d={"M 0 1.4142135381698608 L 1.4142135381698608 0 L 7.207106590270996 5.792893409729004 L 13 0 L 14.414213180541992 1.4142135381698608 L 7.207106590270996 8.621320724487305 L 0 1.4142135381698608 Z"} strokeLinejoin={"miter"} />
						</Svg>
					</View>
				</View>
			</View>
		</View>
	)
}
const Component__Row = ({
	variant1_minWidth,
	variant1_transform,
	variant1_text1,
	variant1_text2,
	variant1_text3,
	variant1_text4,
	variant1_text5,
	variant1_text6,
	variant1_text7,
}) => {
	return (
		<View style={[
			component__Row_stylesheet._Row,
			{
				minWidth: variant1_minWidth,
				transform: variant1_transform,
			},
		]}>
			<Component__Date_Default
				variant1_text1={variant1_text1}
				variant1_minWidth={0}
				variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
			/>
			<Component__Date_Default
				variant1_text1={variant1_text2}
				variant1_minWidth={0}
				variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
			/>
			<Component__Date_Default
				variant1_text1={variant1_text3}
				variant1_minWidth={0}
				variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
			/>
			<Component__Date_Default
				variant1_text1={variant1_text4}
				variant1_minWidth={0}
				variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
			/>
			<Component__Date_Default
				variant1_text1={variant1_text5}
				variant1_minWidth={0}
				variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
			/>
			<Component__Date_Default
				variant1_text1={variant1_text6}
				variant1_minWidth={0}
				variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
			/>
			<Component__Date_Default
				variant1_text1={variant1_text7}
				variant1_minWidth={0}
				variant1_transform={[{ translateX: 0 }, { translateY: 0 },]}
			/>
		</View>
	)
}
const Component__Date_Default = ({
	variant1_minWidth,
	variant1_transform,
	variant1_text1,
}) => {
	return (
		<View style={[
			component__Date_Default_stylesheet._Date_Default,
			{
				minWidth: variant1_minWidth,
				transform: variant1_transform,
			},
		]}>
			<View style={[component__Date_Default_stylesheet._1, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
				<Text style={[component__Date_Default_stylesheet._1, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
					{variant1_text1}
				</Text>
			</View>
		</View>
	)
}
const Component__Weekday = ({
	variant1_minWidth,
	variant1_transform,
	variant1_text1,
}) => {
	return (
		<View style={[
			component__Weekday_stylesheet._Weekday,
			{
				minWidth: variant1_minWidth,
				transform: variant1_transform,
			},
		]}>
			<View style={[component__Weekday_stylesheet._Mo, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
				<Text style={[component__Weekday_stylesheet._Mo, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
					{variant1_text1}
				</Text>
			</View>
		</View>
	)
}
const Component__Date_Active = ({
	variant1_minWidth,
	variant1_transform,
	variant1_text1,
}) => {
	return (
		<View style={[
			component__Date_Active_stylesheet._Date_Active,
			{
				minWidth: variant1_minWidth,
				transform: variant1_transform,
			},
		]}>
			<View style={[component__Date_Active_stylesheet._18, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
				<Text style={[component__Date_Active_stylesheet._18, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
					{variant1_text1}
				</Text>
			</View>
		</View>
	)
}
const Component__Date_Inactive = ({
	variant1_minWidth,
	variant1_transform,
	variant1_text1,
}) => {
	return (
		<View style={[
			component__Date_Inactive_stylesheet._Date_Inactive,
			{
				minWidth: variant1_minWidth,
				transform: variant1_transform,
			},
		]}>
			<View style={[component__Date_Inactive_stylesheet._1_2, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
				<Text style={[component__Date_Inactive_stylesheet._1_2, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
					{variant1_text1}
				</Text>
			</View>
		</View>
	)
}

const stylesheet = StyleSheet.create({
	_Info_Screen: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 844,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
		left: 0,
		top: 0,
	},
	_Info_Screen_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		display: "none",
		left: 48,
		right: "auto",
		top: 158,
		bottom: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		fontFamily: "NanumGothic",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 60,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_2: {
		position: "absolute",
		color: "rgba(166, 211, 136, 1)",
		width: 325,
		height: 175.5,
		borderRadius: 30,
		left: 31,
		right: "auto",
		top: 128,
		bottom: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
	},
	_Repeat_Recent_Meditation: {
		position: "absolute",
		width: 213,
		height: 48,
		left: 89,
		right: "auto",
		top: 145,
		bottom: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		fontFamily: "NanumGothic",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Start_Random_Meditation: {
		position: "absolute",
		width: 213,
		height: 48,
		left: 89,
		right: "auto",
		top: 240,
		bottom: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		fontFamily: "NanumGothic",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_New_Meditation: {
		position: "absolute",
		width: 292,
		height: 32,
		left: 48,
		right: "auto",
		top: 671,
		bottom: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		fontFamily: "NanumGothic",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
});
const component__Navbar_stylesheet = StyleSheet.create({
	_Navbar: {
		position: "absolute",
		width: 390,
		height: 141,
		borderRadius: 15,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Rectangle_3: {
		position: "absolute",
		width: 390,
		height: 104,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 37 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(153, 238, 207, 1)",
	},
	_Shore_1: {
		position: "absolute",
		width: 103,
		height: 390,
		borderRadius: 0,
		opacity: 1,
		left: 390,
		right: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 38 },
			{ rotate: "90deg" },
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});
const component__Calendar_Button_stylesheet = StyleSheet.create({
	_Calendar_Button: {
		position: "absolute",
		width: 120,
		height: 120,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Rectangle_4: {
		position: "absolute",
		width: 120,
		height: 120,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});
const component__Profile_Button_stylesheet = StyleSheet.create({
	_Profile_Button: {
		position: "absolute",
		width: 127,
		height: 104,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Rectangle_5: {
		position: "absolute",
		width: 127,
		height: 104,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(62, 177, 177, 1)",
	},
	_Rectangle_6: {
		position: "absolute",
		width: 80,
		height: 77,
		borderRadius: 0,
		opacity: 1,
		left: 23,
		right: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 13 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});
const component__Meditate_Button_stylesheet = StyleSheet.create({
	_Meditate_Button: {
		position: "absolute",
		width: 120,
		height: 116,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Larger_Circle_Main_Button: {
		position: "absolute",
		width: 120,
		height: 116,
		borderRadius: 1000,
		backgroundColor: "rgba(252, 252, 252, 1)",
		borderWidth: 5,
		borderStyle: "solid",
		borderColor: "rgba(178, 199, 255, 1)",
		left: 0,
		right: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
	},
	_Group: {
		position: "absolute",
		width: 48,
		height: 48,
		transform: [
			{ translateX: 36 },
			{ translateY: 34 },
			{ rotate: "0deg" },
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: "auto",
		height: 15.989334106445312,
		borderRadius: 0,
		left: 20.666748046875,
		right: 4.570587158203125,
		transform: [
			{ translateX: 0 },
			{ translateY: 32.01068115234375 },
			{ rotate: "0deg" },
		],
	},
	_Vector_2: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: "auto",
		height: 15.989334106445312,
		borderRadius: 0,
		left: 4.5706787109375,
		right: 19.999988555908203,
		transform: [
			{ translateX: 0 },
			{ translateY: 32.01068115234375 },
			{ rotate: "0deg" },
		],
	},
	_Vector_3: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: "auto",
		height: 34.46933364868164,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
	},
});
const component__codicon_account_stylesheet = StyleSheet.create({
	_codicon_account: {
		position: "absolute",
		width: 16,
		height: 16,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Vector_4: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: "auto",
		height: 16,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
	},
});
const component__Header_With_Back_stylesheet = StyleSheet.create({
	_Header_With_Back: {
		position: "absolute",
		width: 390,
		height: 100,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_TOP: {
		position: "absolute",
		width: 392,
		height: 100,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Fresh_Turboscent_1: {
		position: "absolute",
		width: 392,
		height: 100,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Find_Your_Calm_Place: {
		position: "absolute",
		width: 263,
		height: 24,
		left: 65,
		right: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 54 },
			{ rotate: "0deg" },
		],
		fontFamily: "NanumGothic",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 25,
		color: "rgba(251, 251, 251, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
});
const component__Back_Button_stylesheet = StyleSheet.create({
	_Back_Button: {
		position: "absolute",
		width: 131,
		height: 62,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Rectangle_14: {
		position: "absolute",
		width: 131,
		height: 62,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(196, 196, 196, 1)",
	},
});
const component_____Back_stylesheet = StyleSheet.create({
	____Back: {
		position: "absolute",
		width: 67,
		height: 20,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	____Back_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 0,
		right: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		fontFamily: "NanumGothic",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
});
const component__Calendar_stylesheet = StyleSheet.create({
	_Calendar: {
		position: "absolute",
		width: 280,
		height: 286,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Days: {
		position: "absolute",
		width: "auto",
		height: "auto",
		borderRadius: 0,
		left: 0,
		right: "auto",
		top: 46,
		bottom: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	_Header: {
		position: "absolute",
		width: 280,
		height: 22,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_March_2022: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		fontFamily: "Inter",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Group_7: {
		position: "absolute",
		width: 40,
		height: 16,
		transform: [
			{ translateX: 240 },
			{ translateY: 3 },
			{ rotate: "0deg" },
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_icon___chevron_right: {
		position: "absolute",
		width: 16,
		height: 16,
		borderRadius: 0,
		left: "auto",
		right: 0,
		top: 0,
		bottom: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_2__Stroke_: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: "auto",
		height: 8.621320724487305,
		borderRadius: 0,
		left: 4.0428466796875,
		right: -2.457059860229492,
		transform: [
			{ translateX: 0 },
			{ translateY: 14.95703125 },
			{ rotate: "-90deg" },
		],
	},
	_icon___chevron_left: {
		position: "absolute",
		width: 16,
		height: 16,
		borderRadius: 0,
		left: "auto",
		right: 24,
		top: 0,
		bottom: "auto",
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_2__Stroke__2: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: "auto",
		height: 8.621320724487305,
		borderRadius: 0,
		left: 11.9571533203125,
		right: -10.371366500854492,
		transform: [
			{ translateX: 0 },
			{ translateY: 0.54296875 },
			{ rotate: "90deg" },
		],
	},
});
const component__Row_stylesheet = StyleSheet.create({
	_Row: {
		position: "relative",
		width: "auto",
		height: "auto",
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		flexShrink: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
		],
		marginBottom: 0,
	},
});
const component__Date_Default_stylesheet = StyleSheet.create({
	_Date_Default: {
		position: "relative",
		width: "auto",
		height: "auto",
		borderRadius: 40,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(223, 223, 223, 1)",
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
		],
		marginRight: 0,
	},
	_1: {
		position: "relative",
		width: 20,
		height: 20,
		minWidth: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0,
		flexShrink: 0,
	},
});
const component__Weekday_stylesheet = StyleSheet.create({
	_Weekday: {
		position: "relative",
		width: "auto",
		height: "auto",
		borderRadius: 40,
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
		],
		marginRight: 0,
	},
	_Mo: {
		position: "relative",
		width: 20,
		height: 20,
		minWidth: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0,
		flexShrink: 0,
	},
});
const component__Date_Active_stylesheet = StyleSheet.create({
	_Date_Active: {
		position: "relative",
		width: "auto",
		height: "auto",
		borderRadius: 40,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(223, 223, 223, 1)",
		backgroundColor: "rgba(53, 71, 232, 1)",
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
		],
		marginRight: 0,
	},
	_18: {
		position: "relative",
		width: 20,
		height: 20,
		minWidth: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0,
		flexShrink: 0,
	},
});
const component__Date_Inactive_stylesheet = StyleSheet.create({
	_Date_Inactive: {
		position: "relative",
		width: "auto",
		height: "auto",
		borderRadius: 40,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(223, 223, 223, 1)",
		backgroundColor: "rgba(251, 251, 251, 1)",
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
		],
		marginRight: 0,
	},
	_1_2: {
		position: "relative",
		width: 20,
		height: 20,
		minWidth: 0,
		transform: [
			{ translateX: 0 },
			{ translateY: 0 },
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(115, 115, 115, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0,
		flexShrink: 0,
	},
});

const imageUrl_Rectangle_4 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/e32c00b3a14cee1f609677995357b7e9"
const imageUrl_Rectangle_6 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/7ed8c15fb83e529ab1e3c6796854bddf"
const imageUrl_Fresh_Turboscent_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/e03c77630b589bbc9f9fb2a7ff94b22b"
const imageUrl_Shore_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/ad0d42c525afdce4d239ae984cf24a70"