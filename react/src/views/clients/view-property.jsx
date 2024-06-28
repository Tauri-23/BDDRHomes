import { Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import '/src/assets/css/view-listing.css';

export default function ClientViewProperty() {

    return (
        <div className="content1 compressed">
            <div className="property-pictures">
                <div className="property-picture large">

                </div>

                {/* Property Pics */}
                <div className="d-flex flex-wrap gap3 h-100 flex-grow-1">
                    <div className="property-picture small">

                    </div>

                    <div className="property-picture small">

                    </div>

                    <div className="property-picture small">

                    </div>

                    <div className="property-picture small">

                    </div>
                </div>
            </div>

            {/* Property Infos */}
            <div className="property-infos mar-top-1">
                    <div className="property-infos-texts">
                        {/* Property Name */}
                        <div className="text-l1 fw-bold">Anyana, Paris</div>
                        {/* Property Location */}
                        <div className="d-flex text-l3 gap3 align-items-center mar-top-3">
                            <Icon.GeoAlt/>
                            Antero Soriano Highway in Tanza, Cavite, 4108
                        </div>


                        <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                        {/* About this Listing */}
                        <div className="mar-top-l1 d-flex flex-direction-y gap2">
                            <div className="text-l2 fw-bold">About this Property</div>
                            <div className="about-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum varius nisl, ac hendrerit mauris accumsan laoreet. Curabitur elit dolor, varius sit amet lacinia sagittis, luctus ac urna. Donec quis ultrices lectus, at maximus turpis. Nam leo augue, congue sollicitudin lorem vel, dignissim feugiat felis. Aenean non erat tristique, vulputate quam id, iaculis velit. Phasellus aliquam pellentesque ligula. Aenean pulvinar posuere finibus. Aenean dignissim ut justo a vehicula. Aenean et purus pellentesque, finibus lorem ut, hendrerit sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse placerat, velit vel placerat fringilla, lacus ipsum sollicitudin mi, sit amet aliquet dolor metus et tortor. Vestibulum molestie mi non est efficitur, ac ornare magna rutrum. Ut ullamcorper tincidunt nulla, ultricies ultricies nisi porta varius. Vestibulum pellentesque convallis quam, non varius eros vehicula faucibus. Nullam porta feugiat diam, vitae finibus urna auctor et. Praesent porta tortor in urna lobortis tempus.

                                Vestibulum sodales est at tellus malesuada, vel fermentum justo facilisis. Nullam commodo tortor nec aliquam pretium. Vestibulum fringilla malesuada sagittis. Proin iaculis augue in egestas elementum. Mauris viverra nec tellus ut accumsan. Donec laoreet eros nec est venenatis, eget tempor metus condimentum. Nulla porta nunc eget dictum eleifend. Nulla hendrerit, ipsum ac fringilla hendrerit, ipsum quam rutrum elit, vitae aliquam turpis massa in lectus. Curabitur ultrices libero odio, at congue urna condimentum non. Curabitur ultrices lobortis laoreet. Donec et sagittis felis. Sed rhoncus sapien turpis, quis mattis libero mattis blandit.

                                Aenean vehicula augue eget purus posuere feugiat. Suspendisse vel feugiat dui. Quisque mi enim, vestibulum sed aliquam sed, lacinia id diam. In vehicula lorem quis eros viverra, eu sagittis magna volutpat. Morbi commodo euismod scelerisque. Suspendisse tempor tincidunt mi id efficitur. Praesent bibendum sollicitudin ante eget maximus. Donec lacinia nulla ac ligula aliquam, eget lacinia mauris dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis interdum pretium massa, sit amet sollicitudin nibh accumsan et. Pellentesque lacus lorem, iaculis eget volutpat vel, lobortis a mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent faucibus scelerisque pulvinar. Nam eu fermentum eros. Nunc eu nibh nibh. Proin aliquet non dolor vel blandit.

                                Nullam ac massa sed arcu vulputate imperdiet vitae sed sapien. Suspendisse at imperdiet est. Sed dolor nibh, elementum et aliquam sed, hendrerit eu erat. Mauris id dapibus magna. Pellentesque pretium orci ac est euismod tempus. Fusce ut fermentum nisi. Donec lacinia massa pellentesque turpis vestibulum, ac auctor mi blandit.

                                Mauris nulla purus, commodo non eros quis, convallis fringilla tortor. Nunc placerat elit non lacus tempus blandit. Donec nec lacus neque. Aenean sodales quis libero eu porta. Vestibulum nec dictum massa. Fusce a tortor ante. Nam lacus eros, ultrices nec ornare nec, molestie ut metus. Aliquam maximus vestibulum volutpat. Donec ut dignissim enim. Praesent vitae lectus eget neque sagittis laoreet.
                            </div>
                            <div className="d-flex align-items-center gap4 fw-bold cursor-pointer">See More <Icon.ChevronRight/></div>
                        </div>


                        <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                        {/* Specs */}
                        <div className="mar-top-l1 d-flex flex-direction-y gap2">
                            <div className="text-l2 fw-bold">Specs</div>

                            <div className="d-flex gap1">
                                <div className="w-50 d-flex flex-direction-y gap3">
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/bed.svg" className="listing-spec-box-icon"/>Bedrooms: 4</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/bathtub.svg" className="listing-spec-box-icon"/>Bathrooms: 4</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/garages.svg" className="listing-spec-box-icon"/>Car port: 2</div>
                                </div>
                                
                                <div className="w-50 d-flex flex-direction-y gap3">
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/area.svg" className="listing-spec-box-icon"/>Lot area: 150sqm</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/area.svg" className="listing-spec-box-icon"/>Floor area: 187.32sqm</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/house.svg" className="listing-spec-box-icon"/>House Type: Single Detached</div>
                                </div>                                
                            </div>
                        </div>


                        <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                        {/* Features and Amenities */}
                        <div className="d-flex flex-direction-y gap2">
                            <div className="text-l2 fw-bold">What this place offer</div>

                            <div className="d-flex gap1">
                                <div className="w-50 d-flex flex-direction-y gap3">
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/club1.svg" className="listing-spec-box-icon"/>Clubhouse</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/court.svg" className="listing-spec-box-icon"/> Basketball Court</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/swing.svg" className="listing-spec-box-icon"/>Playground</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/dumbbell.svg" className="listing-spec-box-icon"/>Gym</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/security1.svg" className="listing-spec-box-icon"/>24 Hour Securty</div>
                                </div>
                                
                                <div className="w-50 d-flex flex-direction-y gap3">
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/park2.svg" className="listing-spec-box-icon"/>Jogging Path</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/internet1.svg" className="listing-spec-box-icon"/>Internet Service</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/pool.svg" className="listing-spec-box-icon"/>Swimming Pool</div>
                                    <div className="listing-spec-box2"><img src="/src/assets/media/icons/park2.svg" className="listing-spec-box-icon"/>Park</div>
                                </div>
                            </div>
                        </div>


                        <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                        {/* Map */}
                        <div className="mar-top-l1 d-flex flex-direction-y gap2">
                            <div className="text-l2 fw-bold">Property Map</div>

                            <div className="property-map-cont">
                            </div>
                        </div>
                    </div>



                    {/* Actions */}
                    <div className="action-box d-flex gap1 flex-direction-y">
                        {/* Price */}
                        <div className="text-l2">₱ 12,411,975.86</div>
                        <div className="d-flex flex-direction-y gap3">
                            <div className="text-l3">Listed By:</div>
                            <div className="d-flex gap3 align-items-center">
                                <div className="listed-by-pfp">
                                    <img src="/src/assets/media/agents/pfp/melissa-pfp.jpeg" alt="" />
                                </div>
                                <div className="">
                                    <div className="text-l3">Melissa Diawan</div>
                                    <div className="text-m3">Agent / Team Leader</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="d-flex flex-direction-y gap3">
                            <div className="primary-btn-blue1 text-l3 text-center">Contact Agent</div>
                            <div className="secondary-btn-blue1 text-l3 text-center color-blue1">Book A Tripping</div>
                        </div>
                    </div>
                </div>
        </div>
    )
};