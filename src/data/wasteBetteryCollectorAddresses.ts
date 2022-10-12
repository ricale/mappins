const wasteBetteryCollectorAddresses = [
'서울시 서초구 사임당로 89',
'서울시 서초구 남부순환로337가길 52',
'서울시 서초구 효령로68길 9-2',
'서울시 서초구 효령로68길 33',
'서울시 서초구 효령로68길 81',
'서울시 서초구 서초중앙로2길 41',
'서울시 서초구 서초중앙로 14',
'서울시 서초구 서초중앙로 26',
'서울시 서초구 서리풀4길 43',
'서울시 서초구 사임당로10길 39',
'서울시 서초구 사임당로17길 116',
'서울시 서초구 사임당로23길 53',
'서울시 서초구 서초대로64길 36',
'서울시 서초구 사임당로17길 90',
'서울시 서초구 사임당로17길 80',
'서울시 서초구 사임당로23길 58',
'서울시 서초구 사임당로 105',
'서울시 서초구 사임당로19길 10',
'서울시 서초구 서초대로58길 10',
'서울시 서초구 서초중앙로 18',
'서울시 서초구 서초중앙로22길 25',
'서울시 서초구 서초중앙로 110',
'서울시 서초구 서초대로70길 51',
'서울시 서초구 서초대로74길 30',
'서울시 서초구 강남대로53길 11',
'서울시 서초구 사임당로 151',
'서울시 서초구 사임당로 137',
'서울시 서초구 사임당로 130',
'서울시 서초구 효령로77길 20',
'서울시 서초구 효령로72길 57',
'서울시 서초구 효령로74길 56',
'서울시 서초구 효령로74길 57',
'서울시 서초구 서운로6길, 남부순환로347길 교차점',
'서울시 서초구 강남대로47길 30 건너편',
'서울시 서초구 서초대로74길 23',
'서울시 서초구 서운로 122',
'서울시 서초구 서운로 138',
'서울시 서초구 반포대로 8길 11-9',
'서울시 서초구 명달로10',
'서울시 서초구 명달로112',
'서울시 서초구 명달로33',
'서울시 서초구 명달로6길 31',
'서울시 서초구 효령로49길 57',
'서울시 서초구 명달로4길 30',
'서울시 서초구 명달로20',
'서울시 서초구 반포대로21길 67',
'서울시 서초구 반포대로21길 74',
'서울시 서초구 반포대로5길 65',
'서울시 서초구 효령로 237',
'서울시 서초구 서초대로46길 62',
'서울시 서초구 반포대로5길 43',
'서울시 서초구 서초대로40길 72',
'서울시 서초구 남부순환로323길 38-15',
'서울시 서초구 반포대로 122',
'서울시 서초구 서초중앙로 15',
'서울시 서초구 반포대로4길 24',
'서울시 서초구 명달로 97-14',
'서울시 서초구 반포대로 58',
'서울시 서초구 명달로 91',
'서울시 서초구 효령로53길 45',
'서울시 서초구 반포대로14길 71',
'서울시 서초구 남부순환로2343-10',
'서울시 서초구 서초대로 240',
'서울시 서초구 효령로197',
'서울시 서초구 명달로 38',
'서울시 서초구 남부순환로 323길 56-18',
'서울시 서초구 반포대로23길 71',
'서울시 서초구 명달로6길 24',
'서울시 서초구 남부순환로315길 46',
'서울시 서초구 서초동 1488-4',
'서울시 서초구 서운로 26길3',
'서울시 서초구 서초대로55길 13',
'서울시 서초구 서운로21길2',
'서울시 서초구 서초중앙로 200',
'서울시 서초구 서초중앙로24길 43',
'서울시 서초구 사평대로56길 7',
'서울시 서초구 서초대로65길 13-10',
'서울시 서초구 고무래로 94',
'서울시 서초구 서초중앙로 188',
'서울시 서초구 서운로 200',
'서울시 서초구 서초대로 385',
'서울시 서초구 서운로 221',
'서울시 서초구 강남대로61길 23',
'서울시 서초구 서운로 194',
'서울시 서초구 나루터로 38',
'서울시 서초구 잠원로 213-10',
'서울시 서초구 잠원로 157',
'서울시 서초구 신반포로33길 71',
'서울시 서초구 신반포로33길 66',
'서울시 서초구 신반포로33길 64',
'서울시 서초구 잠원로4길 33-9',
'서울시 서초구 잠원로14길 3',
'서울시 서초구 잠원로14길 23',
'서울시 서초구 잠원로12길 4',
'서울시 서초구 잠원로 204',
'서울시 서초구 잠원로14길 41',
'서울시 서초구 잠원로 166-4',
'서울시 서초구 잠원로 166-17',
'서울시 서초구 잠원로 150',
'서울시 서초구 잠원로8길 3',
'서울시 서초구 잠원로 136',
'서울시 서초구 잠원로8길 20',
'서울시 서초구 나루터로4길 60',
'서울시 서초구 나루터로 46',
'서울시 서초구 신반포로 261',
'서울시 서초구 신반포로41길 69',
'서울시 서초구 신반포로41길 55',
'서울시 서초구 강남대로95길 56',
'서울시 서초구 신반포로45길 23',
'서울시 서초구 신반포로45길 71',
'서울시 서초구 잠원동 30-10',
'서울시 서초구 강남대로109길 102',
'서울시 서초구 신반포로45길 29-12',
'서울시 서초구 나루터로 15',
'서울시 서초구 강남대로107길 24',
'서울시 서초구 잠원로14길 54',
'서울시 서초구 잠원로 8길 35',
'서울시 서초구 잠원로14길 32',
'서울시 서초구 신반포로 10',
'서울시 서초구 신반포로 32',
'서울시 서초구 신반포로 9',
'서울시 서초구 신반포로 45',
'서울시 서초구 신반포로 55-4',
'서울시 서초구 사평대로 273',
'서울시 서초구 강남대로83길 55',
'서울시 서초구 반포동 720',
'서울시 서초구 신반포로270',
'서울시 서초구 신반포로15길16',
'서울시 서초구 신반포로15길19',
'서울시 서초구 반포대로 275',
'서울시 서초구 신반포로16길15-20',
'서울시 서초구 신반포로15길 4',
'서울시 서초구 신반포로19길 26',
'서울시 서초구 신반포로23길 78',
'서울시 서초구 신반포로23길 41',
'서울시 서초구 잠원로 37-48',
'서울시 서초구 잠원로 88',
'서울시 서초구 잠원로 85',
'서울시 서초구 신반포로33길 15',
'서울시 서초구 잠원로3길 20',
'서울시 서초구 잠원로3길 6',
'서울시 서초구 나루터로4길 70-5',
'서울시 서초구 잠원로 86',
'서울시 서초구 신반포로23길 30',
'서울시 서초구 잠원로3길 8',
'서울시 서초구 반포대로 310',
'서울시 서초구 잠원로 46-38',
'서울시 서초구 잠원로 117',
'서울시 서초구 사평대로28길 70',
'서울시 서초구 서래로10길 26',
'서울시 서초구 사평대로28길 31',
'서울시 서초구 사평대로 154',
'서울시 서초구 동광로32길 7',
'서울시 서초구 사평대로20길 76',
'서울시 서초구 사평대로16길 20',
'서울시 서초구 사평대로12길 19',
'서울시 서초구 반포동 53-1',
'서울시 서초구 반포동 60-4',
'서울시 서초구 반포동 60-5',
'서울시 서초구 반포동 46',
'서울시 서초구 동광로19길 38',
'서울시 서초구 방배로39길 42',
'서울시 서초구 사평대로6길 44',
'서울시 서초구 방배로43길 21',
'서울시 서초구 방배동 758-4',
'서울시 서초구 방배로 270',
'서울시 서초구 방배로 270',
'서울시 서초구 방배로 278',
'서울시 서초구 동광로1길 112',
'서울시 서초구 동광로3길 18',
'서울시 서초구 방배로 43길 5',
'서울시 서초구 방배로43길 2',
'서울시 서초구 동광로 89-5',
'서울시 서초구 방배중앙로 207-10',
'서울시 서초구 방배중앙로21길 55',
'서울시 서초구 효령로29길 43',
'서울시 서초구 방배로11길 35',
'서울시 서초구 서초대로 156',
'서울시 서초구 서초대로34길 34',
'서울시 서초구 방배로18길 103',
'서울시 서초구 방배로18길 67',
'서울시 서초구 효령로33길 66-31',
'서울시 서초구 효령로33길 50',
'서울시 서초구 방배로19길 67',
'서울시 서초구 방배로13길 62',
'서울시 서초구 서초대로26길 19',
'서울시 서초구 청두곶길 36',
'서울시 서초구 과천대로 946',
'서울시 서초구 전원말안길 2',
'서울시 서초구 청두곶길 14',
'서울시 서초구 방배선행길 2',
'서울시 서초구 도구로 73',
'서울시 서초구 방배천로 92',
'서울시 서초구 도구로1길 33',
'서울시 서초구 도구로 45-7',
'서울시 서초구 도구로 79',
'서울시 서초구 효령로 71',
'서울시 서초구 방배천로 11',
'서울시 서초구 방배로 40',
'서울시 서초구 효령로 164',
'서울시 서초구 효령로34길 79',
'서울시 서초구 남부순환로 2311-12',
'서울시 서초구 방배로2길 24-6',
'서울시 서초구 방배로 14',
'서울시 서초구 방배로 63',
'서울시 서초구 방배로1길 9',
'서울시 서초구 남부순환로 2248',
'서울시 서초구 남부순환로 2183',
'서울시 서초구 효령로2길 101',
'서울시 서초구 남부순환로297다길 17',
'서울시 서초구 방배동 530-42',
'서울시 서초구 효령로14다길 21',
'서울시 서초구 효령로 72',
'서울시 서초구 효령로 84',
'서울시 서초구 효령로26길 15',
'서울시 서초구 남부순환로287길 17-4',
'서울시 서초구 방배로 173',
'서울시 서초구 서초대로1길 30',
'서울시 서초구 서초대로33길 22',
'서울시 서초구 서초대로1길 34',
'서울시 서초구 방배로28길 90',
'서울시 서초구 방배로26길 71 앞',
'서울시 서초구 서초대로1길 2',
'서울시 서초구 서초대로 17',
'서울시 서초구 방배로33길 29',
'서울시 서초구 방배로28길 63',
'서울시 서초구 방배로26길 41',
'서울시 서초구 서초대로7길 25',
'서울시 서초구 동광로10길 27-8 앞 도로',
'서울시 서초구 동작대로 112',
'서울시 서초구 서초대로 3-4',
'서울시 서초구 동작대로 112',
'서울시 서초구 동광로18길 16',
'서울시 서초구 바우뫼로 41',
'서울시 서초구 바우뫼로 33',
'서울시 서초구 바우뫼로7길 51',
'서울시 서초구 바우뫼로7길 27',
'서울시 서초구 바우뫼로7길 11',
'서울시 서초구 바우뫼로 53',
'서울시 서초구 바우뫼로 91',
'서울시 서초구 바우뫼로18길 20',
'서울시 서초구 남부순환로 2610',
'서울시 서초구 양재천로23길 16',
'서울시 서초구 바우뫼로21길 34',
'서울시 서초구 양재동 9-29',
'서울시 서초구 남부순환로356길 100',
'서울시 서초구 양재동 66-4',
'서울시 서초구 우면동 211',
'서울시 서초구 양재대로2길 34',
'서울시 서초구 양재대로2길 33',
'서울시 서초구 형촌길 35',
'서울시 서초구 형촌길 15',
'서울시 서초구 태봉로2길 60',
'서울시 서초구 태봉로2길 5',
'서울시 서초구 태봉로2길 30',
'서울시 서초구 태봉로2길 10',
'서울시 서초구 양재대로2길 109',
'서울시 서초구 우면산로 369',
'서울시 서초구 강남대로12길 44',
'서울시 서초구 양재동 390',
'서울시 서초구 양재동 298번지 주변',
'서울시 서초구 양재동 357',
'서울시 서초구 매헌로16길 40',
'서울시 서초구 청계산로15길 77',
'서울시 서초구 염곡말길 9',
'서울시 서초구 헌릉로8길 58',
'서울시 서초구 헌릉로8길 45',
'서울시 서초구 헌릉로8길 22',
'서울시 서초구 헌릉로8길 10-12',
'서울시 서초구 청계산로7길 43',
'서울시 서초구 청계산로9길 1-12',
'서울시 서초구 청계산로11길 7-12',
]

export default wasteBetteryCollectorAddresses;