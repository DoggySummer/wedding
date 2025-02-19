"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { Kakao } = window;
      Kakao.init(process.env.NEXT_PUBLIC_JAVASCRIPT_KEY);
    }
  }, []);

  const kakaoLogin = () => {
    const { Kakao } = window;
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/",
      state: "sendfriend_list",
      scope: "talk_message",
    });
  };

  const sendFriend = async () => {
    const { Kakao } = window;
    Kakao.Picker.selectFriends({
      showMyProfile: false,
      maxPickableCount: 10,
      minPickableCount: 1,
    })
      .then(function (res: any) {
        var uuids = res.users.map(function (e: any) {
          return e.uuid;
        });

        return Kakao.API.request({
          url: "/v1/api/talk/friends/message/default/send",
          data: {
            receiver_uuids: uuids,
            template_object: {
              object_type: "list",
              header_title: "WEEKLY MAGAZINE",
              header_link: {
                // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                mobile_web_url: "https://developers.kakao.com",
                web_url: "https://developers.kakao.com",
              },
              contents: [
                {
                  title: "취미의 특징, 탁구",
                  description: "스포츠",
                  image_url:
                    "http://k.kakaocdn.net/dn/bDPMIb/btqgeoTRQvd/49BuF1gNo6UXkdbKecx600/kakaolink40_original.png",
                  link: {
                    mobile_web_url: "https://developers.kakao.com",
                    web_url: "https://developers.kakao.com",
                  },
                },
                {
                  title: "크림으로 이해하는 커피이야기",
                  description: "음식",
                  image_url:
                    "http://k.kakaocdn.net/dn/QPeNt/btqgeSfSsCR/0QJIRuWTtkg4cYc57n8H80/kakaolink40_original.png",
                  link: {
                    mobile_web_url: "https://developers.kakao.com",
                    web_url: "https://developers.kakao.com",
                  },
                },
                {
                  title: "감성이 가득한 분위기",
                  description: "사진",
                  image_url:
                    "http://k.kakaocdn.net/dn/c7MBX4/btqgeRgWhBy/ZMLnndJFAqyUAnqu4sQHS0/kakaolink40_original.png",
                  link: {
                    mobile_web_url: "https://developers.kakao.com",
                    web_url: "https://developers.kakao.com",
                  },
                },
              ],
              buttons: [
                {
                  title: "웹으로 보기",
                  link: {
                    mobile_web_url: "https://developers.kakao.com",
                    web_url: "https://developers.kakao.com",
                  },
                },
                {
                  title: "앱으로 보기",
                  link: {
                    mobile_web_url: "https://developers.kakao.com",
                    web_url: "https://developers.kakao.com",
                  },
                },
              ],
            },
          },
        });
      })
      .then(function (res: any) {
        alert("success: " + JSON.stringify(res));
      })
      .catch(function (err: any) {
        alert("error: " + JSON.stringify(err));
      });
  };
  return (
    <div className="flex flex-col">
      <button className="p-4 mb-4 bg-blue-100" onClick={kakaoLogin}>
        카톡 로그인 버튼
      </button>
      <button className="p-4 mb-4 bg-red-100" onClick={sendFriend}>
        카톡 친구 보내기 버튼
      </button>
    </div>
  );
}
